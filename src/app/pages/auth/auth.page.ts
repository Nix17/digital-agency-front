import { Component } from '@angular/core';
import { CASE_AUTH_REG_ENUM } from 'src/app/shared/Models/Enums/case-auth-reg.enum';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage {
  switchVar: CASE_AUTH_REG_ENUM = CASE_AUTH_REG_ENUM.AUTH;

  changeForm(ev: CASE_AUTH_REG_ENUM) {
    switch(ev) {
      case CASE_AUTH_REG_ENUM.AUTH:
        this.switchVar = CASE_AUTH_REG_ENUM.AUTH;
        break;

      case CASE_AUTH_REG_ENUM.REG:
        this.switchVar = CASE_AUTH_REG_ENUM.REG;
        break;
    }
  }
}
