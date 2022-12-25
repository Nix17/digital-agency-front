import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRouting } from './profile.routing';
import { SharedModule } from '../../shared/Modules/shared.module';
import { ProfilePage } from './profile.page';



@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    CommonModule,
    ProfileRouting,
    SharedModule
  ]
})
export class ProfileModule { }
