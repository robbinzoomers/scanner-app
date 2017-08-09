import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { DataService } from './data.service';
import { Environments } from '../../environments/environments';


@Injectable()
export class RadiusService extends DataService {

  constructor(storage: Storage,
              http: Http) {
    super(Environments.apiBaseUrl +'/settings/radius', storage, http);
  }

}
