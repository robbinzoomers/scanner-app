import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Environments } from '../../environments/environments';

import { AppError } from '../_common/app-error';
import { NotFoundError } from '../_common/not-found-error';
import { BadInputError } from '../_common/bad-input-error';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private apiBaseUrl: string = Environments.apiBaseUrl;

  constructor(private http: Http,
              private storage: Storage) { }

  signup(email: string, password: string) {
    return this.http.post(this.apiBaseUrl + '/auth/register', { email: email, password: password })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  signin(email: string, password: string) {
    return this.http.post(this.apiBaseUrl + '/auth/login', { email: email, password: password })
      .map((response: Response) => {
        let data = response.json()
        if (data.user && data.user.token) {
          this.storage.set('user', data.user);
          this.storage.set('token', data.user.token);
        }
        return data;
      })
      .catch(this.handleError);
  }

  signout() {
    return this.http.get(this.apiBaseUrl + '/auth/signout')
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  resetPassword(email: string) {
    return this.http.post(this.apiBaseUrl + '/auth/reset-password', { email: email })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getActiveUser() {
    return this.http.get(this.apiBaseUrl + '/auth/user')
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  isAuthenticated() {

  }

  private handleError(error: Response | any) {
    if (error.status === 400)
      return Observable.throw(new BadInputError(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError(error));

    return Observable.throw(new AppError(error));
  }

  // private headers() {
  //   let user: any = this.storage.get('user');
  //   if (user && user.token) {
  //     let headers = new Headers({ 'Authorization': 'Bearer ' + user.token });
  //     return new RequestOptions({ headers: headers });
  //   }
  // }

}
