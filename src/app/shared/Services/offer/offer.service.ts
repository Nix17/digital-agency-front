import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OfferDTO } from '../../Models/Classes/DTOs/offer.dto';
import { IResponse } from '../../Models/Interfaces/base/base.response';
import { OfferForm } from '../../Models/Classes/Forms/offer.form';
import { MessageResponse } from '../../Models/Interfaces/base/message-response';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private readonly api = environment.apiUrl;
  private readonly url = 'Offer';

  constructor(
    private http: HttpClient
  ) { }

  public getOfferNumber(): Observable<number> {
    return this.http.get<IResponse<number>>(`${ this.api }${ this.url }/number`).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public getAll(): Observable<OfferDTO[]> {
    return this.http.get<IResponse<OfferDTO[]>>(`${ this.api }${ this.url }`).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public getSingle(id: string): Observable<OfferDTO> {
    return this.http.get<IResponse<OfferDTO>>(`${ this.api }${ this.url }/${ id }`).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public createNew(form: OfferForm): Observable<MessageResponse> {
    return this.http.post<IResponse<MessageResponse>>(`${ this.api }${ this.url }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public update(id: string, form: OfferForm): Observable<MessageResponse> {
    return this.http.put<IResponse<MessageResponse>>(`${ this.api }${ this.url }/${ id }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public getAllByUserId(id: string): Observable<OfferDTO[]> {
    return this.http.get<IResponse<OfferDTO[]>>(`${ this.api }${ this.url }/user/${ id }`).pipe(
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
