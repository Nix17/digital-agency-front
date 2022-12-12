import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IKeyNameDescPrice } from '../../Models/Interfaces/i-key-value.interface';

@Component({
  selector: 'my-list-box-with-my-cards',
  templateUrl: './list-box-with-my-cards.component.html',
  styleUrls: ['./list-box-with-my-cards.component.scss']
})
export class ListBoxWithMyCardsComponent implements OnInit {
  @Input() widthPercent: number = 40;
  @Input() multipleSelect: boolean = true;
  @Input() options: IKeyNameDescPrice[] = [];
  @Input() title: string = '';
  @Input() subTitle: string = '';

  @Output() changeSingleSelectedItem = new EventEmitter<IKeyNameDescPrice>();
  @Output() changeMuiltiSelectedItems = new EventEmitter<IKeyNameDescPrice[]>();

  selectedItem!: IKeyNameDescPrice;
  selectedItems: IKeyNameDescPrice[] = [];

  ngOnInit(): void {
    if (this.multipleSelect === false && this.options.length > 0) {
      this.selectedItem = this.options[0];
      this.changeSingleSelectedItem.emit(this.selectedItem);
    }
  }

  onChangeSingle(ev: any) {
    let obj = ev.value as IKeyNameDescPrice;
    this.changeSingleSelectedItem.emit(obj);
  }

  onChangeMuili(ev: any) {
    let objs = ev.value as IKeyNameDescPrice[];
    this.changeMuiltiSelectedItems.emit(objs);
  }
}
