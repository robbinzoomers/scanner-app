import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler, ToastController } from 'ionic-angular';

@Injectable()
export class AppErrorHandler extends IonicErrorHandler implements ErrorHandler {

  constructor(private toastCtrl: ToastController) {
    super();
  }

  handleError(error: any): void {
    this.showToast('an unexpexted error occurred');
    console.log(error);
  }

  private showToast(message) {

    const toast = this.toastCtrl.create({
      message: message,
      duration: 2500,
      cssClass: 'text__center'
    });
    toast.present();
  }
}
