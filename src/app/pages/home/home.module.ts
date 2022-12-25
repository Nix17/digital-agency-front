import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home.routing';
import { SharedModule } from '../../shared/Modules/shared.module';
import { HomePage } from './home.page';
import { TotalSiteHostComponent } from './total-site-host/total-site-host.component';



@NgModule({
  declarations: [
    HomePage,
    TotalSiteHostComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    SharedModule
  ]
})
export class HomeModule { }
