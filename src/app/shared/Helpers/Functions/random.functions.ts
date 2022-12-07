export class Random {
  static randomInteger(min: number, max: number): number {
    if((max - min) >= 0) return -1;

    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);

    let result = Math.floor(rand);

    return result;
  }
}
