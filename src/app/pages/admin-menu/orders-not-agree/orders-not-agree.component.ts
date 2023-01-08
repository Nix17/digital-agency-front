import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import * as saveAs from 'file-saver';
import { BehaviorSubject, combineLatest, map, Observable, shareReplay, tap } from 'rxjs';
import { DATE_TOOLS } from 'src/app/shared/Helpers/date.helper';
import { OrderDTO } from 'src/app/shared/Models/Classes/DTOs/order.dto';
import { ExportDataAgreementDate, OrderListIdAgreementForm } from 'src/app/shared/Models/Classes/Forms/export-data-agreement-date.form';
import { AuthService } from 'src/app/shared/Services/auth/auth.service';
import { MyMessageService } from 'src/app/shared/Services/my-message.service';
import { OfferService } from 'src/app/shared/Services/offer/offer.service';
import { OrderService } from 'src/app/shared/Services/order/order.service';

@UntilDestroy()
@Component({
  selector: 'app-orders-not-agree',
  templateUrl: './orders-not-agree.component.html',
  styleUrls: ['./orders-not-agree.component.scss']
})
export class OrdersNotAgreeComponent implements OnInit {
  @ViewChild('dt') table: ElementRef | undefined;

  private _refresh$ = new BehaviorSubject<boolean>(false);
  private _needRefresh$ = this._refresh$.asObservable();

  orders$: Observable<OrderDTO[]> = combineLatest([this.srvOrder.getAllByAgreement(false), this._needRefresh$]).pipe(
    map(data => data[0]),
    tap(d => {
      d.forEach((item) => this.staticOrders.push(item));
      this.valueToTable = this.staticOrders;
    }),
    shareReplay()
  );

  staticOrders: OrderDTO[] = [];

  valueToTable: OrderDTO[] = [];

  searchForm: ExportDataAgreementDate = new ExportDataAgreementDate(false, '', '');

  constructor(
    private auth: AuthService,
    private srvMsg: MyMessageService,
    private srvOffer: OfferService,
    private srvOrder: OrderService
  ) { }

  ngOnInit(): void {
  }

  onExport() {
    let ids: string[] = [];

    this.valueToTable.forEach(item => ids.push(item.id));

    const form: OrderListIdAgreementForm = new OrderListIdAgreementForm(ids, true);

    this.srvOrder.exportDataToWordByDate(form).pipe(
      untilDestroyed(this),
      tap((response) => {
        const file = new Blob([response.body] as BlobPart[], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
        saveAs(file, 'OrdersNotAgree.docx');
      })
    ).subscribe();
  }

  private isCorrectLength(date: string): boolean {
    if (date.length === 10) return true
    else return false;
  }

  private isCorrectDate(date: string): boolean {
    if (this.isCorrectLength(date)) return DATE_TOOLS.dateIsValid(DATE_TOOLS.getDateFromCustomString(date));
    else return false;
  }

  myFilter() {
    if (this.isCorrectDate(this.searchForm.startDate) && this.isCorrectDate(this.searchForm.endDate)) {
      this.valueToTable = this.staticOrders.filter(o => DATE_TOOLS.getMyFormatDateString(new Date(o.orderDate)) >= this.searchForm.startDate && DATE_TOOLS.getMyFormatDateString(new Date(o.orderDate)) <= this.searchForm.endDate);
    } else this.valueToTable = this.staticOrders;
  }
}
