export interface IPersonName {
  lastName: string;
  firstName: string;
}

export interface IPersonFullName extends IPersonName {
  middleName: string;
}
