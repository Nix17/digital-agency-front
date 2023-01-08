export class DATE_TOOLS {

  static formatDateYMD(date: any): string {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  static formatDateTime(date: any): string {
    var d = new Date(date),
      hour = '' + d.getHours(),
      minute = '' + d.getMinutes(),
      seconds = '' + d.getSeconds()

    if (hour.length < 2) hour = '0' + hour;
    if (minute.length < 2) minute = '0' + minute;
    if (seconds.length < 2) seconds = '0' + seconds;

    const day = this.formatDateYMD(date);
    const time = [hour, minute, seconds].join(':');

    return `${day} ${time}`;
  }

  static isDate(value: any): boolean {
    if (Object.prototype.toString.call(value) === "[object Date]")
      return true;
    return false;
  }

  static getDateFromStringDMY(str: string): Date {
    const year = +str.substr(6, 4);
    const month = +str.substr(3, 2) - 1;
    const day = +str.substr(0, 2);
    const date = new Date(year, month, day, 0, 0, 0, 0);
    return date;
  }

  static getDateFromStringDMYHM(str: string): Date {
    const year = +str.substr(6, 4);
    const month = +str.substr(3, 2) - 1;
    const day = +str.substr(0, 2);
    const hour = +str.substr(8, 2);
    const minute = +str.substr(10, 2);
    const date = new Date(year, month, day, hour, minute, 0, 0);
    return date;
  }

  static getStringDMYFromDate(d: Date | undefined | null): string {
    if (d === undefined || d === null) return '';
    d = new Date(d);
    return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`;
  }
  static getStringDMYHMFromDate(d: Date | undefined | null): string {
    if (d === undefined || d === null) return '';
    d = new Date(d);
    return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  }
  static getStringYMDHMSFromDate(d: Date | undefined | null): string {
    if (d === undefined || d === null) return '';
    d = new Date(d);
    return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
  }

  static getStringForm(date: Date): string {
    const dateStr: string = (date).toLocaleDateString();
    const timeStr: string = (date).toLocaleTimeString();

    const searchDate = '.';
    const replaceWithDate = '-';

    const resDate = dateStr.split(searchDate).join(replaceWithDate);
    const resTime = timeStr.substring(0, 5);

    const result = resDate + ' ' + resTime;

    return result;
  }

  static getMyFormatDateString(date: Date): string {
    const dateStr: string = (date).toLocaleDateString();
    const year: string = (dateStr.split('.')[2]);
    const month: string = (dateStr.split('.')[1]);
    const day: string = (dateStr.split('.')[0]);

    const res = `${ year }-${ month }-${ day }`;
    return res;
  }

  static setDateToString(date: Date): string {
    const dateStr: string = (date).toLocaleDateString();

    const searchDate = '.';
    const replaceWithDate = '-';

    const resDate = dateStr.split(searchDate).join(replaceWithDate);
    return resDate;
  }

  static getDateFromCustomString(date: string): Date {
    let dateArr: string[] = date.split('-');

    const year: number = Number(dateArr[2]);
    const month: number = Number(dateArr[1]);
    const day: number = Number(dateArr[0]);

    const dateRes: Date = new Date(year, (month - 1), day);

    return dateRes;
  }

  static getDateForm(dateTime: string): string {
    let dateTimeArr: string[] = dateTime.split(' ');
    const year: number = Number(dateTimeArr[0].split('-')[2]);
    const month: number = Number(dateTimeArr[0].split('-')[1]);
    const day: number = Number(dateTimeArr[0].split('-')[0]);

    const hours: number = Number(dateTimeArr[1].split(':')[0]);
    const minutes: number = Number(dateTimeArr[1].split(':')[1]);

    // console.log(year, month, day, hours, minutes);

    const date: Date = new Date(year, (month - 1), day, hours, minutes);

    // console.log('ConverterDATE', date);
    return date.toISOString();
  }

  static getDate(dateTime: string): Date {
    let dateTimeArr: string[] = dateTime.split(' ');
    const year: number = Number(dateTimeArr[0].split('-')[2]);
    const month: number = Number(dateTimeArr[0].split('-')[1]);
    const day: number = Number(dateTimeArr[0].split('-')[0]);

    const hours: number = Number(dateTimeArr[1].split(':')[0]);
    const minutes: number = Number(dateTimeArr[1].split(':')[1]);

    // console.log(year, month, day, hours, minutes);

    const date: Date = new Date(year, (month - 1), day, hours, minutes);

    console.log('ConverterDATE', date);
    return date;
  }

  static dateIsValid(date: any): boolean {
    return date instanceof Date && !isNaN(Number(new Date(date)));
  }
}
