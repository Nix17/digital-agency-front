import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { Observable, map, tap } from 'rxjs';
import { MyMessageService } from '../../Services/my-message.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RoleIdentificator } from '../../Models/Classes/account/role-identificator.static';

@UntilDestroy()
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  year: string = ((new Date()).getFullYear()).toString();
  isShow$: Observable<boolean> = this.auth.isLoginObservable.pipe(
    tap(() => {
      if (this.auth.userName !== null) {
        this.labelBtnProfile = `Профиль (${ this.auth.userName })`
      }
    }),
    tap(() => {
      if (this.auth.role === RoleIdentificator.Admin) this.isShowBtnCfg = true;
      else this.isShowBtnCfg = false;
    })
  );

  labelBtnProfile: string = 'Профиль';

  isShowBtnCfg: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private srvMsg: MyMessageService
  ) {}

  ngOnInit(): void {
  }

  onNav(url: string) {
    let path: string[] = (url !== '' ? ['/', url] : [url]);
    // console.log(path);
    this.router.navigate(path);
  }

  onLogout() {
    let func = () => {
      this.auth.logout().pipe(untilDestroyed(this))
      .subscribe(
        () => {},
        (error) => this.srvMsg.showException(error)
      );
    };
    this.srvMsg.openConfirmDialog('Выйти', 'Вы уверены, что хотите выйти из аккаунта?', func);
  }
}
