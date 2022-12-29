import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { OrderDTO } from '../../../shared/Models/Classes/DTOs/order.dto';
import { OfferDTO } from '../../../shared/Models/Classes/DTOs/offer.dto';
import { KeyValueDTO } from '../../../shared/Models/Classes/DTOs/base/key-value.dto';
import { BehaviorSubject, Observable, combineLatest, map, shareReplay } from 'rxjs';
import { OfferService } from '../../../shared/Services/offer/offer.service';
import { OrderService } from '../../../shared/Services/order/order.service';
import { MyMessageService } from 'src/app/shared/Services/my-message.service';
import { AuthService } from 'src/app/shared/Services/auth/auth.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  @ViewChild('dt') table: ElementRef | undefined;

  private _refresh$ = new BehaviorSubject<boolean>(false);
  private _needRefresh$ = this._refresh$.asObservable();

  orders$: Observable<OrderDTO[]> = combineLatest([this.srvOrder.getAllByUserId(this.auth.userId)]).pipe(
    map(data => data[0]),
    shareReplay()
  );

  selectedItems: OrderDTO[] = [];

  constructor(
    private auth: AuthService,
    private srvMsg: MyMessageService,
    private srvOffer: OfferService,
    private srvOrder: OrderService
  ) {}

  ngOnInit(): void {
  }
}
