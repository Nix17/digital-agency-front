import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPage } from './auth.page';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { AuthRouting } from './auth.routing';
import { SharedModule } from '../../shared/Modules/shared.module';

@NgModule({
  declarations: [
    AuthPage,
    AuthFormComponent,
    RegFormComponent
  ],
  imports: [
    CommonModule,
    AuthRouting,
    SharedModule
  ]
})
export class AuthModule { }
