import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, shareReplay } from 'rxjs';
import { RefBookService } from '../../shared/Services/ref-book.service';
import { RefBookDto } from '../../shared/Models/Classes/DTOs/ReferenceBook/ref-book.dto';

type titles = { title: string; subTitle: string; };

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
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
      subTitle: 'Теперь необходимо определиться, в каком формате будет создаваться дизайн сайта. Все дизайны студии Pedanto - уникальны! Мы работаем с адаптивной версткой, что позволит вашему сайту выглядеть превосходно на любом устройстве! Стоимость разработки шаблона может отличатся в зависимости от сложности проета. Количество правок к согласованному макету предложенных заказчиком в процессе создания, увеличивает его стоимость.'
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

  constructor(
    private srv: RefBookService
  ) {}

  onLog(ev: any) {
    console.log(ev);
  }
}
