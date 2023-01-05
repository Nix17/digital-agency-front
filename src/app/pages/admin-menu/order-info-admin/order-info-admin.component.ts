import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, shareReplay, tap } from 'rxjs';
import { OrderDTO } from 'src/app/shared/Models/Classes/DTOs/order.dto';
import { AuthService } from 'src/app/shared/Services/auth/auth.service';
import { MyMessageService } from 'src/app/shared/Services/my-message.service';
import { OfferService } from 'src/app/shared/Services/offer/offer.service';
import { OrderService } from 'src/app/shared/Services/order/order.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { saveAs } from 'file-saver';

@UntilDestroy()
@Component({
  selector: 'app-order-info-admin',
  templateUrl: './order-info-admin.component.html',
  styleUrls: ['./order-info-admin.component.scss']
})
export class OrderInfoAdminComponent implements OnInit {

  @ViewChild('dt') table: ElementRef | undefined;

  private _refresh$ = new BehaviorSubject<boolean>(false);
  private _needRefresh$ = this._refresh$.asObservable();

  orders$: Observable<OrderDTO[]> = combineLatest([this.srvOrder.getAll(), this._needRefresh$]).pipe(
    map(data => data[0]),
    tap(d => console.log(d)),
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

  onExport() {
    this.srvOrder.exportDataToWord().pipe(
      untilDestroyed(this),
      tap((response) => {
        const file = new Blob([response.body] as BlobPart[], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
        saveAs(file, 'Orders.docx');
      })
    ).subscribe();
  }
}

