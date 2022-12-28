import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Account } from '../../Models/Classes/account/account';
import { UserAuthForm } from '../../Models/Classes/Forms/user-auth.form';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { IResponse } from '../../Models/Interfaces/base/base.response';
import { UserRegForm } from '../../Models/Classes/Forms/user-reg.form';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { MyMessageService } from '../my-message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly api = environment.apiUrl;
  private readonly url = 'Auth';

  private readonly _key: string = 'webcanape-auth';

  constructor(
    private http: HttpClient,
    private lStorage: LocalStorageService<Account>,
    private router: Router,
    private srvMsg: MyMessageService
  ) { }

  public get isLoggedIn(): boolean {
    let auth = this.lStorage.getData(this._key);
    // console.log(auth);
    if (auth !== null) return true;
    else return false;
  }

  public get role(): string {
    let auth = this.lStorage.getData(this._key);
    if (auth !== null) return auth.role;
    else return 'none';
  }

  public get userId(): string {
    let auth = this.lStorage.getData(this._key);
    if (auth !== null) return auth.id;
    else return '';
  }

  public get userName(): string {
    let auth = this.lStorage.getData(this._key);
    if (auth !== null) return auth.firstName;
    else return '';
  }

  private saveAccountOnStorage(data: Account,msg: string = '') {
    if(data !== null || data !== undefined) {
      this.lStorage.saveData(this._key, data);
      this.srvMsg.showSuccess(msg);
      this.router.navigate(['/', 'profile']);
    }
  }

  private removeAccountFromStorage(data: boolean) {
    if (data) {
      this.lStorage.removeData(this._key);
      this.srvMsg.showSuccess(`До свидания!`);
      this.router.navigate(['/', 'auth']);
    }
  }

  public registrationUser(form: UserRegForm): Observable<Account> {
    return this.http.post<IResponse<Account>>(`${ this.api }${ this.url }/reg`, form).pipe(
      map(response => response.data),
      tap(data => this.saveAccountOnStorage(data, `Добро пожаловать, ${ data.firstName }!`)),
      shareReplay()
    );
  }

  public login(form: UserAuthForm): Observable<Account> {
    return this.http.post<IResponse<Account>>(`${ this.api }${ this.url }/login`, form).pipe(
      map(response => response.data),
      tap(data => this.saveAccountOnStorage(data, `Здравствуй, ${ data.firstName }!`)),
      shareReplay()
    );
  }

  public logout(): Observable<boolean> {
    return this.http.get<IResponse<boolean>>(`${ this.api }${ this.url }/logout`).pipe(
      map(response => response.data),
      tap(data => this.removeAccountFromStorage(data)),
      shareReplay()
    );
  }
}
