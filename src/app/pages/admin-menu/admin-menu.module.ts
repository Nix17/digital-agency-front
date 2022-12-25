import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuRouting } from './admin-menu.routing';
import { SharedModule } from '../../shared/Modules/shared.module';
import { AdminMenuPage } from './admin-menu.page';



@NgModule({
  declarations: [
    AdminMenuPage
  ],
  imports: [
    CommonModule,
    AdminMenuRouting,
    SharedModule
  ]
})
export class AdminMenuModule { }
