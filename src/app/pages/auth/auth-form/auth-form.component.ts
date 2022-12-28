import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserAuthForm } from 'src/app/shared/Models/Classes/Forms/user-auth.form';
import { MyMessageService } from 'src/app/shared/Services/my-message.service';
import { CASE_AUTH_REG_ENUM } from '../../../shared/Models/Enums/case-auth-reg.enum';
import { AuthService } from '../../../shared/Services/auth/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Output() openReg = new EventEmitter<CASE_AUTH_REG_ENUM>();

  load: boolean = false;

  authData: UserAuthForm = new UserAuthForm();
  form: FormGroup = new FormGroup({});

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  constructor(
    private srvMsg: MyMessageService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl("", [Validators.email, Validators.required]),
      "password": new FormControl("", [Validators.required])
    });
  }

  onOpenRegForm() {
    this.openReg.emit(CASE_AUTH_REG_ENUM.REG);
  }

  onSubmit() {
    if (this.form.invalid) return this.srvMsg.showError('Необходимо заполнить все поля!!');
    this.load = true;

    this.authData = this.form.value;
    this.auth.login(this.authData).pipe(untilDestroyed(this))
    .subscribe(
      (data) => {
        this.load = false;
        this.form.reset();
      },
      (error) => {
        this.load = false;
        this.srvMsg.showException(error)
      }
    );
  }
}
