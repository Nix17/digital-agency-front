import { IKeyNameDescPrice } from "../../Interfaces/i-key-value.interface";

export class OfferIntermediateForm {
    siteType: IKeyNameDescPrice[] = [];
    siteModules: IKeyNameDescPrice[] = [];
    siteDesign: IKeyNameDescPrice[] = [];
    optionalDesign: IKeyNameDescPrice[] = [];
    siteSupport: IKeyNameDescPrice[] = [];
    totalCost: number = 0;
}
