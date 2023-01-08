import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyNameDescPriceDTO } from '../../Models/Classes/DTOs/base/key-value.dto';
import { DictionaryIdentificator } from '../../Models/Enums/dictionary-identificator.enum';
import { RefBookService } from '../../Services/ref-book.service';
import { MyMessageService } from '../../Services/my-message.service';
import { INPUT_TOOLS } from '../../Helpers/input-handler.helper';
import { DictionaryForm } from '../../Models/Classes/Forms/dictionary.form';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit-refbook-table',
  templateUrl: './edit-refbook-table.component.html',
  styleUrls: ['./edit-refbook-table.component.scss']
})
export class EditRefbookTableComponent implements OnInit {

  @Input() title: string = '';
  @Input() items: KeyNameDescPriceDTO[] = [];
  @Input() dictId!: DictionaryIdentificator;
  @Output() ChangesUpdate = new EventEmitter<boolean>();

  constructor(
    private srv: RefBookService,
    private srvMsg: MyMessageService
  ) {}

  ngOnInit(): void {
  }

  onLog(ev: any) {
    console.log(ev);
  }

  onUpdate(item: KeyNameDescPriceDTO) {

    if (item.price < 0) {
      this.srvMsg.showError('Значение поля "Цена" должно быть больше или равно 0');
      return;
    }

    const form = new DictionaryForm(item.name, item.description, item.price);

    firstValueFrom(this.srv.updateDictByIdentificator(this.dictId, item.id, form))
    .then(
      () => {
        this.srvMsg.showSuccess('Данные успешно обновлены!');
        this.ChangesUpdate.emit(true);
      }
    )
    .catch(
      (error) => this.srvMsg.showException(error)
    );
  }

  inputEvent(event: any) {
    INPUT_TOOLS.keyPressNumbers(event);
  }

}
