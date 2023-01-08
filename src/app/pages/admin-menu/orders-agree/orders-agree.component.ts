import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as saveAs from 'file-saver';
import { BehaviorSubject, combineLatest, map, Observable, shareReplay, tap } from 'rxjs';
import { OrderDTO } from 'src/app/shared/Models/Classes/DTOs/order.dto';
import { AuthService } from 'src/app/shared/Services/auth/auth.service';
import { MyMessageService } from 'src/app/shared/Services/my-message.service';
import { OfferService } from 'src/app/shared/Services/offer/offer.service';
import { OrderService } from 'src/app/shared/Services/order/order.service';
import { ExportDataAgreementDate } from '../../../shared/Models/Classes/Forms/export-data-agreement-date.form';
import { DATE_TOOLS } from '../../../shared/Helpers/date.helper';

@UntilDestroy()
@Component({
  selector: 'app-orders-agree',
  templateUrl: './orders-agree.component.html',
  styleUrls: ['./orders-agree.component.scss']
})
export class OrdersAgreeComponent implements OnInit {
  @ViewChild('dt') table: ElementRef | undefined;

  private _refresh$ = new BehaviorSubject<boolean>(false);
  private _needRefresh$ = this._refresh$.asObservable();

  orders$: Observable<OrderDTO[]> = combineLatest([this.srvOrder.getAllByAgreement(true), this._needRefresh$]).pipe(
    map(data => data[0]),
    tap(d => {
      d.forEach((item) => this.staticOrders.push(item));
      this.valueToTable = this.staticOrders;
    }),
    shareReplay()
  );

  staticOrders: OrderDTO[] = [];

  valueToTable: OrderDTO[] = [];

  searchForm: ExportDataAgreementDate = new ExportDataAgreementDate(true, '', '');

  constructor(
    private auth: AuthService,
    private srvMsg: MyMessageService,
    private srvOffer: OfferService,
    private srvOrder: OrderService
  ) {}

  ngOnInit(): void {
  }

  onExport() {
    // this.srvOrder.exportDataToWord().pipe(
    //   untilDestroyed(this),
    //   tap((response) => {
    //     const file = new Blob([response.body] as BlobPart[], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    //     saveAs(file, 'OrdersAgree.docx');
    //   })
    // ).subscribe();
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
