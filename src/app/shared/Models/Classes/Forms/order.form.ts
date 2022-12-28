export class OrderForm {
  constructor(
    public offerId: string = '',
    public userId: string = '',
    public orderDate: string = '',
    public agreement: boolean = false,
  ) {}
}
