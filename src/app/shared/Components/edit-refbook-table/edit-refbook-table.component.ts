import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyNameDescPriceDTO } from '../../Models/Classes/DTOs/base/key-value.dto';
import { DictionaryIdentificator } from '../../Models/Enums/dictionary-identificator.enum';
import { RefBookService } from '../../Services/ref-book.service';
import { MyMessageService } from '../../Services/my-message.service';

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

}
