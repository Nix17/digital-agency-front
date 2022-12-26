import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { KeyNameDescPriceDTO } from '../Models/Classes/DTOs/base/key-value.dto';
import { DictionaryIdentificator } from '../Models/Enums/dictionary-identificator.enum';
import { IResponse } from '../Models/Interfaces/base/base.response';
import { DictionaryForm } from '../Models/Classes/Forms/dictionary.form';
import { MessageResponse } from '../Models/Interfaces/base/message-response';
import { DictionaryArrayIntIdsForm } from '../Models/Classes/Forms/dictionary-array-int-ids.form';

@Injectable({
  providedIn: 'root'
})
export class RefBookService {

  private readonly api = environment.apiUrl;
  private readonly url = 'Dictionary';

  constructor(
    private http: HttpClient
  ) { }

  public getDictAllByIdentificator(dictId: DictionaryIdentificator): Observable<KeyNameDescPriceDTO[]> {
    let id = dictId;
    return this.http.get<IResponse<KeyNameDescPriceDTO[]>>(`${ this.api }${ this.url }/${ id }`).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public createNewDictByIdentificator(dictId: DictionaryIdentificator, form: DictionaryForm): Observable<number> {
    let id = dictId;
    return this.http.post<IResponse<number>>(`${ this.api }${ this.url }/${ id }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public updateDictByIdentificator(dictId: DictionaryIdentificator, id: number, form: DictionaryForm): Observable<MessageResponse> {
    let _dictId = dictId;
    return this.http.put<IResponse<MessageResponse>>(`${ this.api }${ this.url }/${ _dictId }/record/${ id }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public deleteSelectedDictByIdentificator(form: DictionaryArrayIntIdsForm): Observable<MessageResponse> {
    return this.http.post<IResponse<MessageResponse>>(`${ this.api }${ this.url }/delete`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }
}
