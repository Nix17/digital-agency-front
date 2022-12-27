import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRouting } from './profile.routing';
import { SharedModule } from '../../shared/Modules/shared.module';
import { ProfilePage } from './profile.page';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { OrderInfoComponent } from './order-info/order-info.component';



@NgModule({
  declarations: [
    ProfilePage,
    ProfileInfoComponent,
    OrderInfoComponent
  ],
  imports: [
    CommonModule,
    ProfileRouting,
    SharedModule
  ]
})
export class ProfileModule { }
