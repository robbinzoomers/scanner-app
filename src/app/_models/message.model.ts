import { Injectable } from '@angular/core';

@Injectable()
export class Message {
  public title: string;
  public datetime: string;
  public address: string;
  public city: string;
  public discipline: number;
  public latitude: number;
  public longitude: number;
}
