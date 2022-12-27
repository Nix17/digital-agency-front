import { AuditableGuidDTO } from "./base/auditable.dto";

export class UserDTO extends AuditableGuidDTO {
  email: string = '';
  password: string = '';
  role: string = '';
  phone: string = '';
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
}
