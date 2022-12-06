import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PrimengSharedModule } from './primeng-shared.module';
import { MyProgressSpinnerComponent } from '../Components/my-progress-spinner/my-progress-spinner.component';



@NgModule({
  declarations: [
    MyProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PrimengSharedModule
  ],
  exports: [
    PrimengSharedModule,
    MyProgressSpinnerComponent
  ],
  providers: []
})
export class SharedModule { }
