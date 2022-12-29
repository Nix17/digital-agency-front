import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, shareReplay, tap } from 'rxjs';
import { UserDTO } from '../../../shared/Models/Classes/DTOs/user.dto';
import { AuthService } from '../../../shared/Services/auth/auth.service';
import { UserService } from '../../../shared/Services/user/user.service';
import { UserUpdateForm } from '../../../shared/Models/Classes/Forms/user-update.form';
import { MyMessageService } from '../../../shared/Services/my-message.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  user: UserDTO = new UserDTO();
  private _refresh$ = new BehaviorSubject<boolean>(false);
  private _needRefresh$ = this._refresh$.asObservable();

  user$: Observable<UserDTO> = combineLatest([this.srvUser.getSingle(this.auth.userId), this._needRefresh$]).pipe(
    map(data => data[0]),
    tap(data => this.user = data),
    shareReplay()
  );

  constructor(
    private auth: AuthService,
    private srvUser: UserService,
    private srvMsg: MyMessageService
  ) {}

  ngOnInit(): void {
  }

  private validateForm(form: UserDTO): boolean {
    if (form.lastName === '') {
      this.srvMsg.showError('Поле "Фамилия" не должно быть пустым!');
      return false;
    }

    if (form.firstName === '') {
      this.srvMsg.showError('Поле "Имя" не должно быть пустым!');
      return false;
    }

    if (form.middleName === '') {
      this.srvMsg.showError('Поле "Отчество" не должно быть пустым!');
      return false;
    }

    if (form.password === '') {
      this.srvMsg.showError('Поле "Пароль" не должно быть пустым!');
      return false;
    }

    if (form.phone === '') {
      this.srvMsg.showError('Поле "Телефон" не должно быть пустым!');
      return false;
    }

    return true;
  }

  onSubmit() {
    if (!this.validateForm(this.user)) return;

    const form: UserUpdateForm = new UserUpdateForm(
      this.user.password,
      this.user.phone,
      this.user.lastName,
      this.user.firstName,
      this.user.middleName
    );

    this.srvUser.update(this.user.id, form).pipe(untilDestroyed(this))
    .subscribe(
      () => this.srvMsg.showSuccess('Данные успешно обновлены!'),
      (error) => this.srvMsg.showException(error)
    );
  }
}
