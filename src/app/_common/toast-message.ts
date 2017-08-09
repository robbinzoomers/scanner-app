
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastMessage {

  message: string = '';

  constructor(public toastCtrl: ToastController) { }


  public showToast(message) {
    console.log('go show toast');
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2500,
      cssClass: 'text__center'
    });
    toast.present();
  }

}
