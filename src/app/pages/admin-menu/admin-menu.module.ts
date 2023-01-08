import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuRouting } from './admin-menu.routing';
import { SharedModule } from '../../shared/Modules/shared.module';
import { AdminMenuPage } from './admin-menu.page';
import { OrderAdminExpandRowComponent } from './admin-all-orders-table/order-admin-expand-row/order-admin-expand-row.component';
import { AdminAllOrdersTableComponent } from './admin-all-orders-table/admin-all-orders-table.component';
import { EditRefBookComponent } from './edit-ref-book/edit-ref-book.component';
import { OrdersAgreeComponent } from './orders-agree/orders-agree.component';
import { OrdersNotAgreeComponent } from './orders-not-agree/orders-not-agree.component';



@NgModule({
  declarations: [
    AdminMenuPage,
    OrderAdminExpandRowComponent,
    AdminAllOrdersTableComponent,
    EditRefBookComponent,
    OrdersAgreeComponent,
    OrdersNotAgreeComponent
  ],
  imports: [
    CommonModule,
    AdminMenuRouting,
    SharedModule
  ]
})
export class AdminMenuModule { }
