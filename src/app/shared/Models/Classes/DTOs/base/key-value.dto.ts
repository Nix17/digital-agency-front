import { AuditableIntIdDTO } from "./auditable.dto";

export interface KeyName extends AuditableIntIdDTO {
  name: string;
}

export interface KeyNameDTO {
  id: number;
  name: string;
}

export interface KeyNameDescription extends KeyName {
  description: string;
}

export interface KeyNameDescPrice extends KeyNameDescription {
  price: number;
}

export interface KeyNameDescPriceDTO extends AuditableIntIdDTO {
  name: string;
  description: string;
  price: number;
}

export interface KeyValueDTO {
  id: string;
  value: string;
}
