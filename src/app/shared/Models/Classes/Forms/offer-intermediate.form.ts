import { IKeyNameDescPrice } from "../../Interfaces/i-key-value.interface";
import { DevelopmentTimelineDTO } from '../DTOs/development-timeline.dto';

export class OfferIntermediateForm {
    siteType: IKeyNameDescPrice[] = [];
    siteModules: IKeyNameDescPrice[] = [];
    siteDesign: IKeyNameDescPrice[] = [];
    optionalDesign: IKeyNameDescPrice[] = [];
    siteSupport: IKeyNameDescPrice[] = [];
    totalCost: number = 0;
    developmentTimeline!: DevelopmentTimelineDTO;
    comment: string = '';
}
