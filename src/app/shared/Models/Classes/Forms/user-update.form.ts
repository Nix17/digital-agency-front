export class UserUpdateForm {
  constructor(
    public password: string = '',
    public phone: string = '',
    public lastName: string = '',
    public firstName: string = '',
    public middleName: string = '',
  ) {}
}
