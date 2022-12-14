import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderDTO } from '../../Models/Classes/DTOs/order.dto';
import { IResponse } from '../../Models/Interfaces/base/base.response';
import { OrderForm, OrderFormUpd } from '../../Models/Classes/Forms/order.form';
import { MessageResponse } from '../../Models/Interfaces/base/message-response';
import { OrderListIdAgreementForm } from '../../Models/Classes/Forms/export-data-agreement-date.form';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly api = environment.apiUrl;
  private readonly url = 'Order';

  private readonly word = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<OrderDTO[]> {
    return this.http.get<IResponse<OrderDTO[]>>(`${ this.api }${ this.url }`).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public getAllByAgreement(agree: boolean): Observable<OrderDTO[]> {
    return this.http.post<IResponse<OrderDTO[]>>(`${ this.api }${ this.url }/agreement`, agree).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public getSingle(id: string): Observable<OrderDTO> {
    return this.http.get<IResponse<OrderDTO>>(`${ this.api }${ this.url }/${ id }`).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public createNew(form: OrderForm): Observable<MessageResponse> {
    return this.http.post<IResponse<MessageResponse>>(`${ this.api }${ this.url }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public update(id: string, form: OrderForm): Observable<MessageResponse> {
    return this.http.put<IResponse<MessageResponse>>(`${ this.api }${ this.url }/${ id }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public updateOrderCost(id: string, form: OrderFormUpd): Observable<MessageResponse> {
    return this.http.put<IResponse<MessageResponse>>(`${ this.api }${ this.url }/${ id }/order-cost`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public getAllByUserId(id: string): Observable<OrderDTO[]> {
    return this.http.get<IResponse<OrderDTO[]>>(`${ this.api }${ this.url }/user/${ id }`).pipe(
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

  public exportDataToWord() {
    let hdrs = new HttpHeaders();
    hdrs = hdrs.set('Accept', this.word);

    return this.http.get(
      `${ this.api }${ this.url }/export-word`,
      {
        observe: 'response',
        headers: hdrs,
        responseType: 'blob'
      }
    ).pipe(
      catchError(err => {
        console.log('WORD ERROR:');
        console.log(err);
        return EMPTY;
      }),
      shareReplay()
    );
  }

  public exportDataToWordByUserId(userId: string) {
    let hdrs = new HttpHeaders();
    hdrs = hdrs.set('Accept', this.word);

    return this.http.get(
      `${ this.api }${ this.url }/${ userId }/export-word`,
      {
        observe: 'response',
        headers: hdrs,
        responseType: 'blob'
      }
    ).pipe(
      catchError(err => {
        console.log('WORD ERROR:');
        console.log(err);
        return EMPTY;
      }),
      shareReplay()
    );
  }

  public exportDataToWordByDate(form: OrderListIdAgreementForm) {
    let hdrs = new HttpHeaders();
    hdrs = hdrs.set('Accept', this.word);

    return this.http.post(
      `${ this.api }${ this.url }/export-word/date`,
      form,
      {
        observe: 'response',
        headers: hdrs,
        responseType: 'blob'
      }
    ).pipe(
      catchError(err => {
        console.log('WORD ERROR:');
        console.log(err);
        return EMPTY;
      }),
      shareReplay()
    );
  }
}
