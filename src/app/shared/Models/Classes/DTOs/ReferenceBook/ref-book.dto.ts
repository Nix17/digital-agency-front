import { IKeyNameDescPrice, IKeyNameDescPriceType, IKeyName } from '../../../Interfaces/i-key-value.interface';

export class RefBookDto {
  siteType: IKeyNameDescPrice[] = [];
  siteModules: IKeyNameDescPriceType[] = [];
  siteDesign: IKeyNameDescPrice[] = [];
  optionalDesign: IKeyNameDescPrice[] = [];
  siteSupport: IKeyNameDescPrice[] = [];
  communicationMethod: IKeyName[] = [];
  rejectionReason: IKeyName[] = [];
  urgency: IKeyName[] = [];
}
