import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthForm } from 'src/app/shared/Models/Classes/Forms/user-auth.form';
import { CASE_AUTH_REG_ENUM } from '../../../shared/Models/Enums/case-auth-reg.enum';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  authForm: UserAuthForm = new UserAuthForm();
  form: FormGroup = new FormGroup({});

  @Output() openReg = new EventEmitter<CASE_AUTH_REG_ENUM>();

  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl("", [Validators.email]),
      "password": new FormControl("", [Validators.required])
    });
  }

  onOpenRegForm() {
    this.openReg.emit(CASE_AUTH_REG_ENUM.REG);
  }
}
