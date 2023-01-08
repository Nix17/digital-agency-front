export class DATE_TOOLS {

  static dateIsValid(date: any): boolean {
    return date instanceof Date && !isNaN(Number(new Date(date)));
  }

  static getMyFormatDateString(date: Date): string {
    const dateStr: string = (date).toLocaleDateString();
    const year: string = (dateStr.split('.')[2]);
    const month: string = (dateStr.split('.')[1]);
    const day: string = (dateStr.split('.')[0]);

    const res = `${ year }-${ month }-${ day }`;
    return res;
  }

  static getDateFromCustomString(date: string): Date {
    let dateArr: string[] = date.split('-');

    const year: number = Number(dateArr[2]);
    const month: number = Number(dateArr[1]);
    const day: number = Number(dateArr[0]);

    const dateRes: Date = new Date(year, (month - 1), day);

    return dateRes;
  }
}
