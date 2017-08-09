
import { AppError } from './app-error';

export class NotFoundError extends AppError {

  constructor(error) {
    super(error);

    this.errorMessage = 'Er is iets mis gegaan. Probeer het later nog eens;';
  }

}
