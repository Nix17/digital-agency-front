import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, shareReplay } from 'rxjs';
import { RefBookService } from '../../shared/Services/ref-book.service';
import { RefBookDto } from '../../shared/Models/Classes/DTOs/ReferenceBook/ref-book.dto';
import { OfferForm } from '../../shared/Models/Classes/Forms/offer.form';
import { IKeyNameDescPrice } from '../../shared/Models/Interfaces/i-key-value.interface';
import { OFFER_COST_ENUM } from '../../shared/Models/Enums/offer-cost.enum';

type titles = { title: string; subTitle: string; };

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  textInfo: titles[] = [
    {
      title: 'ТИП САЙТА',
      subTitle: 'Давайте для начала определимся, с какой целью вам нужен сайт и выберем соответствующий ему тип. В зависимости от выбора, будут подобраны соответствующие модули. Модули можно добавить или исключить ниже. Все наши сайты основаны на базе Pedanto CMS и имеют панель администратора.'
    },
    {
      title: 'ВЫБОР МОДУЛЕЙ',
      subTitle: 'Модули позволяют расширять функционал вашего сайта. В зависимости от типа сайта подбираются соответствующие модули. Но даже на сайт-визитку никто не мешает установить блог или каталог товаров.'
    },
    {
      title: 'ДИЗАЙН САЙТА',
      subTitle: 'Теперь необходимо определиться, в каком формате будет создаваться дизайн сайта. Все дизайны DesignSBMPEI - уникальны! Мы работаем с адаптивной версткой, что позволит вашему сайту выглядеть превосходно на любом устройстве! Стоимость разработки шаблона может отличатся в зависимости от сложности проета. Количество правок к согласованному макету предложенных заказчиком в процессе создания, увеличивает его стоимость.'
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

  refBook$: Observable<RefBookDto> = combineLatest([this.srv.getAll(), this._needRefresh$])
  .pipe(
    map(data => data[0]),
    shareReplay()
  );

  dataForm: OfferForm = new OfferForm();
  totalCost: number = 0;




  constructor(
    private srv: RefBookService
  ) {}

  ngOnInit(): void {
  }

  onLog(ev: any) {
    console.log(ev);
  }

  // changeTotalCost(data: OfferForm, eventArray)

  changeSiteType(event: IKeyNameDescPrice) {
    this.dataForm.siteType = event;
    this.totalCost = this.dataForm.siteType.price;
  }

  private recalculateCost(obj: OfferForm): number {
    let resCost: number = 0;

    resCost += obj.siteType.price;

    obj.siteModules.forEach((item) => {
      resCost += item.price;
    });

    resCost += obj.siteDesign.price;

    obj.optionalDesign.forEach((item) => {
      resCost += item.price;
    });

    obj.siteSupport.forEach((item) => {
      resCost += item.price;
    });

    return resCost;
  }

  changeTotalCost(offerEnum: OFFER_COST_ENUM, event: any) {
    switch(offerEnum) {
      case OFFER_COST_ENUM.SITE_TYPE:
        this.dataForm.siteType = event as IKeyNameDescPrice;
        break;

      case OFFER_COST_ENUM.SITE_MODULES:
        this.dataForm.siteModules = event as IKeyNameDescPrice[];
        break;

      case OFFER_COST_ENUM.SITE_DESIGN:
        this.dataForm.siteDesign = event as IKeyNameDescPrice;
        break;

      case OFFER_COST_ENUM.OPTIONAL_DESIGN:
        this.dataForm.optionalDesign = event as IKeyNameDescPrice[];
        break;

      case OFFER_COST_ENUM.SITE_SUPPORT:
        this.dataForm.siteSupport = event as IKeyNameDescPrice[];
        break;
    }

    this.totalCost = this.recalculateCost(this.dataForm);
    this.dataForm.totalCost = this.totalCost;
    console.log(this.dataForm);
  }
}
