import { Injectable } from '@angular/core';

@Injectable()
export class User {
  public email: string;
  public password: string;
  public token: string;
}
