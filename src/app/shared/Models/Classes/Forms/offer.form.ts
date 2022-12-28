export class OfferForm {
  constructor(
    public offerNumber: number = 0,
    public userId: string = '',
    public cost: number = 0,
    public developmentTimelineId: number = 0,
    public siteTypeId: number = 0,
    public siteDesignId: number = 0,
    public orderDate: string = '',
    public comment: string = '',
    public siteModulesIds: number[] = [],
    public optionalDesignIds: number[] = [],
    public siteSupportIds: number[] = [],
  ) {}
}
