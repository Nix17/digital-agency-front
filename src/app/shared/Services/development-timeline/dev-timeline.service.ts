import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DevelopmentTimelineDTO } from '../../Models/Classes/DTOs/development-timeline.dto';
import { IResponse } from '../../Models/Interfaces/base/base.response';
import { DevelopmentTimelineForm } from '../../Models/Classes/Forms/development-timeline.form';
import { MessageResponse } from '../../Models/Interfaces/base/message-response';

@Injectable({
  providedIn: 'root'
})
export class DevTimelineService {

  private readonly api = environment.apiUrl;
  private readonly url = 'DevelopmentTimeline';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<DevelopmentTimelineDTO[]> {
    return this.http.get<IResponse<DevelopmentTimelineDTO[]>>(`${ this.api }${ this.url }`).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public createNew(form: DevelopmentTimelineForm): Observable<MessageResponse> {
    return this.http.post<IResponse<MessageResponse>>(`${ this.api }${ this.url }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public update(id: number, form: DevelopmentTimelineForm): Observable<MessageResponse> {
    return this.http.put<IResponse<MessageResponse>>(`${ this.api }${ this.url }/${ id }`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }

  public deleteSelected(form: number[]): Observable<MessageResponse> {
    return this.http.post<IResponse<MessageResponse>>(`${ this.api }${ this.url }/delete`, form).pipe(
      map(response => response.data),
      shareReplay()
    );
  }
}
