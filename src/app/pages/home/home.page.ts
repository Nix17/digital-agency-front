import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { RefBookService } from '../../shared/Services/ref-book.service';
import { OfferIntermediateForm } from '../../shared/Models/Classes/Forms/offer-intermediate.form';
import { IKeyNameDescPrice } from '../../shared/Models/Interfaces/i-key-value.interface';
import { DictionaryIdentificators } from '../../shared/Models/Enums/offer-cost.enum';
import { DictionaryIdentificator } from '../../shared/Models/Enums/dictionary-identificator.enum';
import { KeyNameDescPriceDTO } from '../../shared/Models/Classes/DTOs/base/key-value.dto';
import { DevTimelineService } from 'src/app/shared/Services/development-timeline/dev-timeline.service';
import { OfferService } from '../../shared/Services/offer/offer.service';
import { DevelopmentTimelineDTO } from '../../shared/Models/Classes/DTOs/development-timeline.dto';
import { MyMessageService } from '../../shared/Services/my-message.service';
import { OfferForm } from '../../shared/Models/Classes/Forms/offer.form';
import { AuthService } from '../../shared/Services/auth/auth.service';
import { OrderService } from '../../shared/Services/order/order.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { OrderForm } from 'src/app/shared/Models/Classes/Forms/order.form';
import { Router } from '@angular/router';

type titles = { title: string; subTitle: string; };

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  textInfo: titles[] = [
    {
      title: 'ТИП САЙТА',
      subTitle: 'Давайте для начала определимся, с какой целью вам нужен сайт и выберем соответствующий ему тип. В зависимости от выбора, будут подобраны соответствующие модули. Модули можно добавить или исключить ниже.'
    },
    {
      title: 'ВЫБОР МОДУЛЕЙ',
      subTitle: 'Модули позволяют расширять функционал вашего сайта. В зависимости от типа сайта подбираются соответствующие модули. Но даже на сайт-визитку никто не мешает установить блог или каталог товаров.'
    },
    {
      title: 'ДИЗАЙН САЙТА',
      subTitle: 'Теперь необходимо определиться, в каком формате будет создаваться дизайн сайта. Все дизайны WebCanape - уникальны! Мы работаем с адаптивной версткой, что позволит вашему сайту выглядеть превосходно на любом устройстве! Стоимость разработки шаблона может отличатся в зависимости от сложности проета. Количество правок к согласованному макету предложенных заказчиком в процессе создания, увеличивает его стоимость.'
    },
    {
      title: 'Дополнительный дизайн',
      subTitle: 'Для лучшего продвижения и развития вашего проекта'
    },
    {
      title: 'ПОДДЕРЖКА САЙТА',
      subTitle: 'Создание сайта - это только начало. Его следует наполнить и развивать. Это можно делать самостоятельно или доверить работу профессионалам.'
    }
  ];

  private _refresh$ = new BehaviorSubject<boolean>(false);
  private _needRefresh$ = this._refresh$.asObservable();

  siteTypes$: Observable<KeyNameDescPriceDTO[]> = combineLatest([this.srv.getDictAllByIdentificator(DictionaryIdentificator.SityType), this._needRefresh$])
  .pipe(
    map(data => data[0]),
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

  devTimeline$: Observable<DevelopmentTimelineDTO[]> = this.siteTypes$.pipe(
    switchMap(() => this.srvDevTime.getAll()),
    map(data => data),
    shareReplay()
  );

  offerNum$: Observable<number> = this._needRefresh$.pipe(
    switchMap(() => this.srvOffer.getOfferNumber()),
    map(data => this.offerNumber = data),
    shareReplay()
  );

  load: boolean = false;
  offerNumber: number = 0;
  dataForm: OfferIntermediateForm = new OfferIntermediateForm();
  totalCost: number = 0;

  orderCost: number = 0;

  constructor(
    private srv: RefBookService,
    private srvDevTime: DevTimelineService,
    private srvOffer: OfferService,
    private srvOrder: OrderService,
    private srvMsg: MyMessageService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onChangeRadioBtn() {
    this.totalCost = this.recalculateCost(this.dataForm);
  }

  onLog(ev: any) {
    console.log(ev);
  }

  private recalculateCost(obj: OfferIntermediateForm): number {
    let resCost: number = 0;

    obj.siteType.forEach((item) => {
      resCost += item.price;
    });

    obj.siteModules.forEach((item) => {
      resCost += item.price;
    });

    obj.siteDesign.forEach((item) => {
      resCost += item.price;
    });

    obj.optionalDesign.forEach((item) => {
      resCost += item.price;
    });

    obj.siteSupport.forEach((item) => {
      resCost += item.price;
    });

    if (this.dataForm.developmentTimeline !== undefined) {
      resCost = Number((resCost * this.dataForm.developmentTimeline.multiplicationFactor).toFixed(2));
    }

    return resCost;
  }

  changeTotalCost(offerEnum: DictionaryIdentificators, event: IKeyNameDescPrice[]) {

    switch(offerEnum) {
      case DictionaryIdentificators.SITE_TYPE:
        this.dataForm.siteType = event as IKeyNameDescPrice[];
        break;

      case DictionaryIdentificators.SITE_MODULES:
        this.dataForm.siteModules = event as IKeyNameDescPrice[];
        break;

      case DictionaryIdentificators.SITE_DESIGN:
        this.dataForm.siteDesign = event as IKeyNameDescPrice[];
        break;

      case DictionaryIdentificators.OPTIONAL_DESIGN:
        this.dataForm.optionalDesign = event as IKeyNameDescPrice[];
        break;

      case DictionaryIdentificators.SITE_SUPPORT:
        this.dataForm.siteSupport = event as IKeyNameDescPrice[];
        break;
    }

    this.totalCost = this.recalculateCost(this.dataForm);
    this.dataForm.totalCost = this.totalCost;
  }

  private validateForm(form: OfferIntermediateForm): boolean {
    if (form.siteType.length === 0) {
      this.srvMsg.showError('Вы не выбрали тип сайта!');
      return false;
    }

    if (form.siteDesign.length === 0) {
      this.srvMsg.showError('Вы не выбрали дизайн сайта!');
      return false;
    }

    if (form.developmentTimeline === undefined) {
      this.srvMsg.showError('Вы не указали сроки разработки!');
      return false;
    }

    this.orderCost = form.totalCost;

    return true;
  }

  onSubmit() {
    if (!this.validateForm(this.dataForm)) return;

    this.load = true;

    let modulesIds: number[] = [];
    this.dataForm.siteModules.forEach((item) => {
      modulesIds.push(item.id);
    });

    let optionalIds: number[] = [];
    this.dataForm.optionalDesign.forEach((item) => {
      optionalIds.push(item.id);
    });

    let supportsIds: number[] = [];
    this.dataForm.siteSupport.forEach((item) => {
      supportsIds.push(item.id);
    });

    let sendOfferObj: OfferForm = new OfferForm(
      this.offerNumber,
      this.auth.userId,
      this.dataForm.totalCost,
      this.dataForm.developmentTimeline.id,
      this.dataForm.siteType[0].id,
      this.dataForm.siteDesign[0].id,
      new Date().toISOString(),
      this.dataForm.comment,
      modulesIds,
      optionalIds,
      supportsIds
    );

    // console.log(JSON.stringify(sendOfferObj));

    this.srvOffer.createNew(sendOfferObj)
    .pipe(untilDestroyed(this))
    .subscribe(
      (data) => {
        this.dataForm = new OfferIntermediateForm();
        this.load = false;
        this._refresh$.next(false);
        let msg: string = `${ this.auth.userName }, мы приняли Вашу заявку! Хотите ли Вы подтвердить оформление заказа?`;

        const accept = () => {
          let orderObj = new OrderForm(
            data.message,
            this.auth.userId,
            this.totalCost,
            (new Date()).toISOString(),
            true
          );

          this.srvOrder.createNew(orderObj)
          .pipe(untilDestroyed(this))
          .subscribe(
            () => {
              this.srvMsg.showSuccess('Ваш заказ был оформлен');
              // this.router.navigate(['/']);
              setTimeout(() => {
                this.router.navigate(['/', 'profile'])
              }, 1000);
            },
            (error) => this.srvMsg.showException(error)
          );
        };

        const reject = () => {
          let orderObj = new OrderForm(
            data.message,
            this.auth.userId,
            this.totalCost,
            (new Date()).toISOString(),
            false
          );

          this.srvOrder.createNew(orderObj)
          .pipe(untilDestroyed(this))
          .subscribe(
            () => {
              this.srvMsg.showInfo('Ваш заказ не был оформлен. Вы можете его оформить в своём профиле');
              // this.router.navigate(['/']);
              setTimeout(() => {
                this.router.navigate(['/', 'profile'])
              }, 1000);
            },
            (error) => this.srvMsg.showException(error)
          );
        };

        this.srvMsg.openConfirmDialogWithReject('Подтверждение', msg, accept, reject);
      },
      (error) => {this.srvMsg.showException(error); this.load = false;}
    );
  }
}
