import { Component, Input } from '@angular/core';
import { OrderDTO } from '../../../../shared/Models/Classes/DTOs/order.dto';
import { OfferDTO } from '../../../../shared/Models/Classes/DTOs/offer.dto';

@Component({
  selector: 'app-order-expand-row',
  templateUrl: './order-expand-row.component.html',
  styleUrls: ['./order-expand-row.component.scss']
})
export class OrderExpandRowComponent {

  @Input() offer!: OfferDTO;

}
