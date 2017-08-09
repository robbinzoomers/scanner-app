import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { DataService } from './data.service';
import { Environments } from '../../environments/environments';


@Injectable()
export class RegionService extends DataService {

  constructor(storage: Storage,
              http: Http) {
    super(Environments.apiBaseUrl +'/settings/region', storage, http);
  }

  getDefault() {
    return this.http.get('assets/data/data.json')
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

}
