import { AuditableGuidDTO } from './base/auditable.dto';
import { KeyValueDTO } from './base/key-value.dto';
import { OfferDTO } from './offer.dto';

export class OrderDTO extends AuditableGuidDTO {
  offer!: OfferDTO;
  user!: KeyValueDTO;
  orderDate!: string;
  agreement!: boolean;
}
