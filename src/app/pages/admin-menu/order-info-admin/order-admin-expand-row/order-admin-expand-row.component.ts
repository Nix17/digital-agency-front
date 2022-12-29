import { Component, Input } from '@angular/core';
import { OfferDTO } from 'src/app/shared/Models/Classes/DTOs/offer.dto';

@Component({
  selector: 'app-order-admin-expand-row',
  templateUrl: './order-admin-expand-row.component.html',
  styleUrls: ['./order-admin-expand-row.component.scss']
})
export class OrderAdminExpandRowComponent {

  @Input() offer!: OfferDTO;

}
