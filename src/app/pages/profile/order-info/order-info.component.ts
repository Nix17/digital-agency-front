import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { OrderDTO } from '../../../shared/Models/Classes/DTOs/order.dto';
import { OfferDTO } from '../../../shared/Models/Classes/DTOs/offer.dto';
import { KeyValueDTO } from '../../../shared/Models/Classes/DTOs/base/key-value.dto';
import { BehaviorSubject, Observable, combineLatest, map, shareReplay, switchMap, firstValueFrom, tap } from 'rxjs';
import { OfferService } from '../../../shared/Services/offer/offer.service';
import { OrderService } from '../../../shared/Services/order/order.service';
import { MyMessageService } from 'src/app/shared/Services/my-message.service';
import { AuthService } from 'src/app/shared/Services/auth/auth.service';
import { OrderForm } from '../../../shared/Models/Classes/Forms/order.form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as saveAs from 'file-saver';
import { UserDTO } from '../../../shared/Models/Classes/DTOs/user.dto';

@UntilDestroy()
@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  @ViewChild('dt') table: ElementRef | undefined;

  private _refresh$ = new BehaviorSubject<boolean>(false);
  private _needRefresh$ = this._refresh$.asObservable();

  orders$: Observable<OrderDTO[]> = this._needRefresh$.pipe(
    switchMap(() => this.srvOrder.getAllByUserId(this.auth.userId)),
    shareReplay()
  );

  selectedItems: OrderDTO[] = [];

  constructor(
    private auth: AuthService,
    private srvMsg: MyMessageService,
    private srvOffer: OfferService,
    private srvOrder: OrderService
  ) { }

  ngOnInit(): void {
  }

  onLog(ev: any) {
    console.log(ev);
  }

  onChangeAgreement(item: OrderDTO) {
    const form: OrderForm = new OrderForm(item.offer.id, item.user.id, item.orderCost, item.orderDate, !item.agreement);

    firstValueFrom(this.srvOrder.update(item.id, form))
      .then(() => {
        this.srvMsg.showSuccess('Данные обновлены!');
        this._refresh$.next(true);
      })
      .catch((error) => {
        this.srvMsg.showException(error);
      });
  }

  onExport() {
    this.srvOrder.exportDataToWordByUserId(this.auth.userId).pipe(
      untilDestroyed(this),
      tap((response) => {
        const file = new Blob([response.body] as BlobPart[], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
        saveAs(file, `${ this.auth.userName }_заказы.docx`);
      })
    ).subscribe();
  }

}
