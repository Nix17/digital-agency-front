import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuRouting } from './admin-menu.routing';
import { SharedModule } from '../../shared/Modules/shared.module';
import { AdminMenuPage } from './admin-menu.page';
import { OrderInfoAdminComponent } from './order-info-admin/order-info-admin.component';
import { OrderAdminExpandRowComponent } from './order-info-admin/order-admin-expand-row/order-admin-expand-row.component';



@NgModule({
  declarations: [
    AdminMenuPage,
    OrderInfoAdminComponent,
    OrderAdminExpandRowComponent
  ],
  imports: [
    CommonModule,
    AdminMenuRouting,
    SharedModule
  ]
})
export class AdminMenuModule { }
