import { IAuditable, IAuditableGuid, IAuditableIntId } from '../../../Interfaces/i-auditable.interface';
import { IPersonName } from '../../../Interfaces/i-person.interface';

export class AuditableDTO implements IAuditable {
  public createdBy: string = '';
  public lastModifiedBy: string = '';
  public created: Date = new Date();
  public lastModified: Date = new Date();
}

export class AuditableIntIdDTO implements IAuditableIntId {
  public id!: number;
  public createdBy!: string;
  public lastModifiedBy!: string;
  public created!: Date;
  public lastModified!: Date;
}

export class AuditableGuidDTO implements IAuditableGuid {
  public id!: string;
  public createdBy!: string;
  public lastModifiedBy!: string;
  public created!: Date;
  public lastModified!: Date;
}

export class AuditablePersonDTO implements IAuditableGuid, IPersonName {
  public id!: string;
  public lastName!: string;
  public firstName!: string;
  public createdBy!: string;
  public lastModifiedBy!: string;
  public created!: Date;
  public lastModified!: Date;
}
