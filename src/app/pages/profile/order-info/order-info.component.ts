import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { OrderDTO } from '../../../shared/Models/Classes/DTOs/order.dto';
import { OfferDTO } from '../../../shared/Models/Classes/DTOs/offer.dto';
import { KeyValueDTO } from '../../../shared/Models/Classes/DTOs/base/key-value.dto';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  @ViewChild('dt') table: ElementRef | undefined;

  items: OrderDTO[] = [];
  selectedItems: OrderDTO[] = [];

  constructor() {}

  ngOnInit(): void {
    let offer = new OfferDTO();
    offer = {
      id: '',
      offerNumber: 0,
      user: { id: '', value: '' },
      cost: 0,
      developmentTimeline: { id: 1, name: '', multiplicationFactor: 1, created: new Date(), lastModified: new Date(), createdBy: '', lastModifiedBy: '' },
      siteType: { id: 1, name: '123', description: 'dddddddddddddd', price: 0, created: new Date(), lastModified: new Date(), createdBy: '', lastModifiedBy: '' },
      siteDesign: { id: 1, name: '4567', description: 'dddddddddddddd', price: 0, created: new Date(), lastModified: new Date(), createdBy: '', lastModifiedBy: '' },
      siteModules: [{ id: 1, name: '4567', description: 'dddddddddddddd', price: 0, created: new Date(), lastModified: new Date(), createdBy: '', lastModifiedBy: '' }],
      optionalDesign: [{ id: 1, name: '4567', description: 'dddddddddddddd', price: 0, created: new Date(), lastModified: new Date(), createdBy: '', lastModifiedBy: '' }],
      sitySupport: [{ id: 1, name: '4567', description: 'dddddddddddddd', price: 0, created: new Date(), lastModified: new Date(), createdBy: '', lastModifiedBy: '' }],
      orderDate: '',
      comment: 'cdcdscsdcmsdlv',
      created: new Date(), lastModified: new Date(), createdBy: '', lastModifiedBy: ''
    };

    this.items.push({
      id: '1',
      offer: offer,
      user: { id: '', value: '' },
      orderDate: '',
      agreement: false,
      created: new Date(), lastModified: new Date(), createdBy: '', lastModifiedBy: ''
    });

    this.items.push({
      id: '2',
      offer: offer,
      user: { id: '', value: '' },
      orderDate: '',
      agreement: false,
      created: new Date(), lastModified: new Date(), createdBy: '', lastModifiedBy: ''
    });
  }
}
