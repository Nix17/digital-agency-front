import { IKeyName, IKeyNameDescPrice, IKeyNameDescPriceType } from "../../Interfaces/i-key-value.interface";

export class OfferForm {
    siteType!: IKeyNameDescPrice;
    siteModules: IKeyNameDescPrice[] = [];
    siteDesign!: IKeyNameDescPrice;
    optionalDesign: IKeyNameDescPrice[] = [];
    siteSupport: IKeyNameDescPrice[] = [];
    totalCost: number = 0;
}
