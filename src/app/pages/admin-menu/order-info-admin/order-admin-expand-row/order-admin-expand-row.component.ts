import { Component, Input } from '@angular/core';
import { OfferDTO } from 'src/app/shared/Models/Classes/DTOs/offer.dto';
import { MyMessageService } from '../../../../shared/Services/my-message.service';
import { OrderService } from '../../../../shared/Services/order/order.service';
import { OrderFormUpd } from '../../../../shared/Models/Classes/Forms/order.form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-order-admin-expand-row',
  templateUrl: './order-admin-expand-row.component.html',
  styleUrls: ['./order-admin-expand-row.component.scss']
})
export class OrderAdminExpandRowComponent {

  @Input() offer!: OfferDTO;
  @Input() orderCost: number = 0;
  @Input() orderId: string = '';

  isEdit: boolean = false;

  constructor(
    private srvMsg: MyMessageService,
    private srvOrder: OrderService
  ) {}

  onUpdateOrderCost() {
    if (this.orderCost <= 0) {
      const msg = `Цена заказа не может быть меньше или равна 0!! id = ${ this.orderId }, cost = ${ this.orderCost }`
      this.srvMsg.showError(msg);
      return;
    }

    const obj = new OrderFormUpd(this.orderCost);

    this.srvOrder.updateOrderCost(this.orderId, obj).pipe(untilDestroyed(this))
    .subscribe(
      () => {
        this.srvMsg.showSuccess('Цена изменена!');
        this.isEdit = false;
      },
      (error) => this.srvMsg.showException(error)
    );
  }
}
