import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService<T> {

  constructor() { }

  public saveData(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string): T {
    let obj: T = JSON.parse((localStorage.getItem(key)) as string);
    return obj;
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
