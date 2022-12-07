import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RefBookDto } from '../Models/Classes/DTOs/ReferenceBook/ref-book.dto';

@Injectable({
  providedIn: 'root'
})
export class RefBookService {

  private readonly api = environment.apiUrl;
  private readonly url = 'refbook.json';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<RefBookDto> {
    return this.http.get<RefBookDto>(`${ this.api }${ this.url }`);
  }
}
