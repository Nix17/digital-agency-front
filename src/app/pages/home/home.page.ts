import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, shareReplay } from 'rxjs';
import { RefBookService } from '../../shared/Services/ref-book.service';
import { RefBookDto } from '../../shared/Models/Classes/DTOs/ReferenceBook/ref-book.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  private _refresh$ = new BehaviorSubject<boolean>(false);
  private _needRefresh$ = this._refresh$.asObservable();

  refBook$: Observable<RefBookDto> = combineLatest([this.srv.getAll(), this._needRefresh$])
  .pipe(
    map(data => data[0]),
    shareReplay()
  );

  constructor(
    private srv: RefBookService
  ) {}

  onClick(obj: any) {
    console.log(obj);
  }

}
