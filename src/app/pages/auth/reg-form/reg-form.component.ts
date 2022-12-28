import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CASE_AUTH_REG_ENUM } from 'src/app/shared/Models/Enums/case-auth-reg.enum';
import { MyMessageService } from '../../../shared/Services/my-message.service';
import { UserRegForm } from '../../../shared/Models/Classes/Forms/user-reg.form';
import { AuthService } from 'src/app/shared/Services/auth/auth.service';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  @Output() openAuth = new EventEmitter<CASE_AUTH_REG_ENUM>();

  load: boolean = false;

  regData: UserRegForm = new UserRegForm();

  form: FormGroup = new FormGroup({});

  get lastName() { return this.form.get('lastName'); }
  get firstName() { return this.form.get('firstName'); }
  get middleName() { return this.form.get('middleName'); }
  get phone() { return this.form.get('phone'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  constructor(
    private srvMsg: MyMessageService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      "lastName": new FormControl("", [Validators.required]),
      "firstName": new FormControl("", [Validators.required]),
      "middleName": new FormControl("", [Validators.required]),
      "phone": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.email, Validators.required]),
      "password": new FormControl("", [Validators.required])
    });
  }

  onOpenAuthForm() {
    this.openAuth.emit(CASE_AUTH_REG_ENUM.AUTH);
  }

  onSubmit() {
    if (this.form.invalid) return this.srvMsg.showError('Необходимо заполнить все поля!!');
    this.load = true;

    this.regData = this.form.value;
    this.auth.registrationUser(this.regData).pipe(untilDestroyed(this))
    .subscribe(
      () => {
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
