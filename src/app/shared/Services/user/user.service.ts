import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDTO } from '../../Models/Classes/DTOs/user.dto';
import { IResponse } from '../../Models/Interfaces/base/base.response';
import { UserRegForm } from '../../Models/Classes/Forms/user-reg.form';
import { MessageResponse } from '../../Models/Interfaces/base/message-response';
import { UserUpdateForm } from '../../Models/Classes/Forms/user-update.form';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly api = environment.apiUrl;
  private readonly url = 'User';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<UserDTO[]> {
    return this.http.get<IResponse<UserDTO[]>>(`${ this.api }${ this.url }`).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public getSingle(id: string): Observable<UserDTO> {
    return this.http.get<IResponse<UserDTO>>(`${ this.api }${ this.url }/${ id }`).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public createNew(form: UserRegForm): Observable<MessageResponse> {
    return this.http.post<IResponse<MessageResponse>>(`${ this.api }${ this.url }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public update(id: string, form: UserUpdateForm): Observable<MessageResponse> {
    return this.http.put<IResponse<MessageResponse>>(`${ this.api }${ this.url }/${ id }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public deleteSelected(form: string[]): Observable<MessageResponse> {
    return this.http.post<IResponse<MessageResponse>>(`${ this.api }${ this.url }/delete`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }
}
