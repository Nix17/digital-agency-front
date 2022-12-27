import { AuditableIntIdDTO } from './base/auditable.dto';

export class DevelopmentTimelineDTO extends AuditableIntIdDTO {
  public name: string = '';
  public multiplicationFactor: number = 0;
}
