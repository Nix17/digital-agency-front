export class ExportDataAgreementDate {
  constructor(
    public agree: boolean,
    public startDate: string,
    public endDate: string
  ) {}
}

export class OrderListIdAgreementForm {
  constructor(
    public ids: string[],
    public agreement: boolean,
  ) {}
}
