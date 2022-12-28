import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToText'
})
export class BoolToTextPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value) return 'Да';
    else return 'Нет';
  }

}
