import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullMoney'
})
export class NullMoneyPipe implements PipeTransform {

  transform(value: number): string {
    if(value !== 0) return value.toString()
    else return 'Бесплатно'
  }

}
