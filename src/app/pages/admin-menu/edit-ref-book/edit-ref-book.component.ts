import { Component } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, switchMap } from 'rxjs';
import { KeyNameDescPriceDTO } from 'src/app/shared/Models/Classes/DTOs/base/key-value.dto';
import { DictionaryIdentificator } from 'src/app/shared/Models/Enums/dictionary-identificator.enum';
import { AuthService } from 'src/app/shared/Services/auth/auth.service';
import { MyMessageService } from 'src/app/shared/Services/my-message.service';
import { RefBookService } from 'src/app/shared/Services/ref-book.service';

@Component({
  selector: 'app-edit-ref-book',
  templateUrl: './edit-ref-book.component.html',
  styleUrls: ['./edit-ref-book.component.scss']
})
export class EditRefBookComponent {

  private _refresh$ = new BehaviorSubject<boolean>(false);
  private _needRefresh$ = this._refresh$.asObservable();

  siteType = DictionaryIdentificator.SityType;
  modules = DictionaryIdentificator.SiteModules;
  design = DictionaryIdentificator.SiteDesign;
  optDesign = DictionaryIdentificator.OptionalDesign;
  support = DictionaryIdentificator.SiteSupport;

  siteTypes$: Observable<KeyNameDescPriceDTO[]> = this._needRefresh$
  .pipe(
    switchMap(() => this.srv.getDictAllByIdentificator(DictionaryIdentificator.SityType)),
    map(data => data),
    shareReplay()
  );

  siteModules$: Observable<KeyNameDescPriceDTO[]> = this.siteTypes$.pipe(
    switchMap(() => this.srv.getDictAllByIdentificator(DictionaryIdentificator.SiteModules)),
    map(data => data),
    shareReplay()
  );

  siteDesigns$: Observable<KeyNameDescPriceDTO[]> = this.siteTypes$.pipe(
    switchMap(() => this.srv.getDictAllByIdentificator(DictionaryIdentificator.SiteDesign)),
    map(data => data),
    shareReplay()
  );

  optionalDesigns$: Observable<KeyNameDescPriceDTO[]> = this.siteTypes$.pipe(
    switchMap(() => this.srv.getDictAllByIdentificator(DictionaryIdentificator.OptionalDesign)),
    map(data => data),
    shareReplay()
  );

  siteSupports$: Observable<KeyNameDescPriceDTO[]> = this.siteTypes$.pipe(
    switchMap(() => this.srv.getDictAllByIdentificator(DictionaryIdentificator.SiteSupport)),
    map(data => data),
    shareReplay()
  );

  constructor(
    private srv: RefBookService,
    private srvMsg: MyMessageService,
    private auth: AuthService,
  ) {}

  onUpdateDataToClient(ev: boolean) {
    this._refresh$.next(ev);
  }

}
