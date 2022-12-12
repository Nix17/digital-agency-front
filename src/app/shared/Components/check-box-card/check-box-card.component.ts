import { Component, Input, OnInit } from '@angular/core';
import { faRubleSign } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'my-check-box-card',
  templateUrl: './check-box-card.component.html',
  styleUrls: ['./check-box-card.component.scss'],
})
export class CheckBoxCardComponent implements OnInit {
  @Input() name: string = 'Сайт-Визитка';
  @Input() price: number = 400;
  @Input() description: string = 'Excepteur non ea ea duis voluptate magna qui amet.';

  rubleIcon = faRubleSign;

  sProp: SizeProp = '1x';
  ngOnInit(): void {
  }
}
