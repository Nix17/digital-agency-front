export interface IAuditable {
  createdBy: string;
  lastModifiedBy: string;
  created: Date;
  lastModified: Date;
}

export interface IAuditableIntId extends IAuditable {
  id: number;
}

export interface IAuditableGuid extends IAuditable {
  id: string;
}
