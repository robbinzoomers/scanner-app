import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { DataService } from './data.service';


@Injectable()
export class MessageService extends DataService {

  data: any;

  constructor(storage: Storage,
              http: Http) {
    super('assets/data/data.json', storage, http);
  }


  load(): any {
    this.getAll();
  }


  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data.json();

    // loop through each day in the schedule
    this.data.feeds.forEach((feed: any) => {
      // loop through each timeline group in the day
      feed.messages.forEach((message: any) => {
        // loop through each session in the timeline group

      });
    });

    return this.data;
  }

}



// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
//
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
//
//
// @Injectable()
// export class MessageService {
//
//   data: any;
//
//   constructor(public http: Http) { }
//
//   load(): any {
//     if (this.data) {
//       return Observable.of(this.data);
//     } else {
//       return this.http.get('assets/data/data.json')
//         .map(this.processData, this);
//     }
//   }
//
//   getMessages() {
//     return this.data;
//   }
//
//   processData(data: any) {
//     // just some good 'ol JS fun with objects and arrays
//     // build up the data by linking speakers to sessions
//     this.data = data.json();
//
//     // loop through each day in the schedule
//     this.data.feeds.forEach((feed: any) => {
//       // loop through each timeline group in the day
//       feed.messages.forEach((message: any) => {
//         // loop through each session in the timeline group
//
//       });
//     });
//
//     return this.data;
//   }
// }
