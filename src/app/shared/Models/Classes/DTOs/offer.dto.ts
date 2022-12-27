import { AuditableGuidDTO } from "./base/auditable.dto";
import { KeyNameDescPriceDTO, KeyValueDTO } from "./base/key-value.dto";
import { DevelopmentTimelineDTO } from "./development-timeline.dto";

export class OfferDTO extends AuditableGuidDTO {
  offerNumber!: number;
  user!: KeyValueDTO;
  cost!: number;
  developmentTimeline!: DevelopmentTimelineDTO;
  siteType!: KeyNameDescPriceDTO;
  siteDesign!: KeyNameDescPriceDTO;
  siteModules!: KeyNameDescPriceDTO[];
  optionalDesign!: KeyNameDescPriceDTO[];
  sitySupport!: KeyNameDescPriceDTO[];
  orderDate!: string;
  comment!: string;
}
