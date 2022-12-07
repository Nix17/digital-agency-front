import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PrimengSharedModule } from './primeng-shared.module';
import { MyProgressSpinnerComponent } from '../Components/my-progress-spinner/my-progress-spinner.component';
import { LayoutComponent } from '../Components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyProgressSpinnerComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PrimengSharedModule,
    HttpClientModule,
  ],
  exports: [
    PrimengSharedModule,
    LayoutComponent,
    MyProgressSpinnerComponent,
  ],
  providers: []
})
export class SharedModule { }
