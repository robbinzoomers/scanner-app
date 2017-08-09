
import { AppError } from './app-error';

export class BadInputError extends AppError {

  constructor(error) {
    super();
    console.log('BadInputError', error);
    this.handleError(error);
  }

  handleError(error) {
    let errMsg: string;

    if(error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return errMsg;
  }

}
