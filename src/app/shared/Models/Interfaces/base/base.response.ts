export interface IResponse<T> {
  succeeded: boolean;
  message: string;
  errors: string[];
  data: T;
}
export class Exception {
  stackTrace!: string | null;
  source!: string | null;
  message!: string;
  innerException!: Exception | null;
  hResult!: number;
  helpLink!: string | null;
}
export class ValidationException extends Exception {
  errors!: string[];
  public static ValidationExceptionMessage = "ValidationException";
}
