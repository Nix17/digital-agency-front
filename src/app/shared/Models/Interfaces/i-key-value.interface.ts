export interface IKeyName  {
  id: number;
  name: string;
}

export interface IKeyNameDescription extends IKeyName {
  description: string;
}

export interface IKeyValue {
  id: string;
  value: string;
}

export interface IKeyValueDescription extends IKeyValue {
  description: string;
}
