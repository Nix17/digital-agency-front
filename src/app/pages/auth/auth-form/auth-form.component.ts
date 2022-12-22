import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthForm } from 'src/app/shared/Models/Classes/Forms/user-auth.form';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  authForm: UserAuthForm = new UserAuthForm();
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = new FormGroup({
      "email": new FormControl("", [Validators.email]),
      "password": new FormControl("", [Validators.required])
    });
  }
}
