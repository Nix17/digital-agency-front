export class OrderForm {
  constructor(
    public offerId: string = '',
    public userId: string = '',
    public orderCost: number = 0,
    public orderDate: string = '',
    public agreement: boolean = false,
  ) {}
}

export class OrderFormUpd {
  constructor(public orderCost: number = 1) {}
}
