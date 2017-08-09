import { Observable } from 'rxjs/Rx';

export class MockUserService {

  signup(email: string, password: string) {
    return Observable.of({
      data: '',
      staus: {code: 'OK'}
    });
  }

  signin(email: string, password: string) {
    return Observable.of({
      data: '',
      staus: {code: 'OK'}
    });
  }

  resetPassword(email: string) {
    return Observable.of({
      data: '',
      staus: {code: 'OK'}
    });
  }

  signout() {

  }

}

