import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AppError } from '../_common/app-error';
import { NotFoundError } from '../_common/not-found-error';
import { BadInputError } from '../_common/bad-input-error';
import { User } from '../_models/user.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {

  data: any = [];

  constructor(private url: string,
              private storage: Storage,
              public http: Http) { }


  getAll(): any {
    return this.http.get(this.url, this.headers())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  get(id): any {
    return this.http.get(this.url +'/'+ id, this.headers())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource), this.headers())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.put(this.url, resource, this.headers())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  delete(resource) {
    return this.http.delete(this.url, resource)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  handleError(error: Response | any) {
    if (error.status === 400)
      return Observable.throw(new BadInputError(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError(error));

    return Observable.throw(new AppError(error));
  }

  private headers() {

    this.storage.get('user').then((user: User) => {

      if (user && user.token) {
        let headers = new Headers({ 'Authorization': 'token '+ user.token });
        return new RequestOptions({ headers: headers });
      }

    });

    return false;
  }

}
