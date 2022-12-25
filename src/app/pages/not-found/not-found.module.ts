import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRouting } from './not-found.routing';
import { SharedModule } from '../../shared/Modules/shared.module';
import { NotFoundPage } from './not-found.page';



@NgModule({
  declarations: [
    NotFoundPage
  ],
  imports: [
    CommonModule,
    NotFoundRouting,
    SharedModule
  ]
})
export class NotFoundModule { }
