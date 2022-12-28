import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRouting } from './profile.routing';
import { SharedModule } from '../../shared/Modules/shared.module';
import { ProfilePage } from './profile.page';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { OrderExpandRowComponent } from './order-info/order-expand-row/order-expand-row.component';



@NgModule({
  declarations: [
    ProfilePage,
    ProfileInfoComponent,
    OrderInfoComponent,
    OrderExpandRowComponent
  ],
  imports: [
    CommonModule,
    ProfileRouting,
    SharedModule
  ]
})
export class ProfileModule { }
