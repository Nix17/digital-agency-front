import { AuditablePersonDTO } from '../base/auditable.dto';

export class UserDto extends AuditablePersonDTO {
  public email: string = '';
  public password: string = '';
  public middleName: string = '';
  public gender: string = '';
  public role: string = '';
  public phone: string = '';
}
