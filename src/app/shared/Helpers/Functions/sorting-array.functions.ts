import { IKeyName } from "../../Models/Interfaces/i-key-value.interface";
import { IPersonName } from "../../Models/Interfaces/i-person.interface";

export class SortingArray {

  static sortLastNameProperty(a: IPersonName, b: IPersonName): number {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    // a должно быть равным b
    return 0;
  }

  static sortFirstNameProperty(a: IPersonName, b: IPersonName): number {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    // a должно быть равным b
    return 0;
  }

  static sortStringValues(a: string, b: string): number {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a должно быть равным b
    return 0;
  }

  static sortByIntId(a: IKeyName, b: IKeyName): number {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    // a должно быть равным b
    return 0;
  }

  static sortNumberValues(a: number, b: number): number {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a должно быть равным b
    return 0;
  }

}
