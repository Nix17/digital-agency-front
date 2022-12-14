import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengSharedModule } from './primeng-shared.module';
import { MyProgressSpinnerComponent } from '../Components/my-progress-spinner/my-progress-spinner.component';
import { LayoutComponent } from '../Components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckBoxCardComponent } from '../Components/check-box-card/check-box-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NullMoneyPipe } from '../Pipes/null-money.pipe';
import { ListBoxWithMyCardsComponent } from '../Components/list-box-with-my-cards/list-box-with-my-cards.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MyMessageService } from '../Services/my-message.service';
import { MessagesItemsComponent } from '../Components/messages-items/messages-items.component';
import { BoolToTextPipe } from '../Pipes/bool-to-text.pipe';
import { EditRefbookTableComponent } from '../Components/edit-refbook-table/edit-refbook-table.component';
import { EditRefBookSpaceComponent } from '../Components/edit-refbook-table/edit-ref-book-space/edit-ref-book-space.component';


@NgModule({
  declarations: [
    MyProgressSpinnerComponent,
    LayoutComponent,
    CheckBoxCardComponent,
    NullMoneyPipe,
    ListBoxWithMyCardsComponent,
    MessagesItemsComponent,
    BoolToTextPipe,
    EditRefbookTableComponent,
    EditRefBookSpaceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengSharedModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengSharedModule,
    LayoutComponent,
    MyProgressSpinnerComponent,
    CheckBoxCardComponent,
    FontAwesomeModule,
    NullMoneyPipe,
    ListBoxWithMyCardsComponent,
    MessagesItemsComponent,
    BoolToTextPipe,
    EditRefbookTableComponent,
    EditRefBookSpaceComponent
  ],
  providers: [
    MessageService,
    ConfirmationService,
    MyMessageService
  ]
})
export class SharedModule {
  // static forRoot(): ModuleWithProviders<SharedModule> {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [
  //       MessageService,
  //       ConfirmationService,
  //       MyMessageService
  //     ]
  //   };
  // }
}
