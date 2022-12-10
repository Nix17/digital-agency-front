import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PrimengSharedModule } from './primeng-shared.module';
import { MyProgressSpinnerComponent } from '../Components/my-progress-spinner/my-progress-spinner.component';
import { LayoutComponent } from '../Components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckBoxCardComponent } from '../Components/check-box-card/check-box-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NullMoneyPipe } from '../Pipes/null-money.pipe';
import { ListBoxWithMyCardsComponent } from '../Components/list-box-with-my-cards/list-box-with-my-cards.component';



@NgModule({
  declarations: [
    MyProgressSpinnerComponent,
    LayoutComponent,
    CheckBoxCardComponent,
    NullMoneyPipe,
    ListBoxWithMyCardsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PrimengSharedModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    PrimengSharedModule,
    LayoutComponent,
    MyProgressSpinnerComponent,
    CheckBoxCardComponent,
    FontAwesomeModule,
    NullMoneyPipe,
    ListBoxWithMyCardsComponent
  ],
  providers: []
})
export class SharedModule { }
