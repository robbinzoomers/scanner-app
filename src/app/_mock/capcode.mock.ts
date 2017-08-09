import { Observable } from 'rxjs/Rx';

export class MockCapcodeService {

  getAll() {
    return Observable.of({
      data: [],
      staus: {code: 'OK'}
    });
  }

}
