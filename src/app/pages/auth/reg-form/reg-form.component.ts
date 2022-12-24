import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthForm } from 'src/app/shared/Models/Classes/Forms/user-auth.form';
import { CASE_AUTH_REG_ENUM } from 'src/app/shared/Models/Enums/case-auth-reg.enum';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent {
  authForm: UserAuthForm = new UserAuthForm();
  form: FormGroup = new FormGroup({});

  @Output() openAuth = new EventEmitter<CASE_AUTH_REG_ENUM>();

  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl("", [Validators.email]),
      "password": new FormControl("", [Validators.required])
    });
  }

  onOpenAuthForm() {
    this.openAuth.emit(CASE_AUTH_REG_ENUM.AUTH);
  }
}
