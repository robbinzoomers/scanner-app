
export class AppError {

  errorMessage: string;

  constructor(public originalError?: any) { }

}
