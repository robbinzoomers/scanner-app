import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ToastController, Events, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../app/_services/user.service'

import { AuthRegisterPage } from '../auth-register/auth-register';
import { AuthForgotPage } from '../auth-forgot/auth-forgot';
import { MessagesPage } from '../messages/messages';

@IonicPage()
@Component({
  selector: 'page-auth-login',
  templateUrl: 'auth-login.html'
})

export class AuthLoginPage {

  signinForm: FormGroup;

  constructor(private loadingCtrl: LoadingController,
              private modalCtrl: ModalController,
              private toastCtrl: ToastController,
              private userService: UserService,
              private builder: FormBuilder,
              private events: Events,
              private navCtrl: NavController) {
    this.initForm();
  }


  onSignin() {

    const loading = this.loadingCtrl.create();
    loading.present();

    this.userService.signin(this.signinForm.value.email, this.signinForm.value.password)
      .subscribe(
        data => {
          loading.dismiss();
          this.events.publish('user:auth-login');
          this.navCtrl.setRoot(MessagesPage);
        },
        error => this.showToast(error)
      );
  }


  showForgotPassword() {
    let modal = this.modalCtrl.create(AuthForgotPage);

    modal.present();

    modal.onDidDismiss((message: string) => {
      this.showToast(message);
    });
  }


  showSignup() {
    let modal = this.modalCtrl.create(AuthRegisterPage);

    modal.present();

    modal.onDidDismiss((message: string) => {
      this.showToast(message);
    });
  }


  private showToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2500,
      cssClass: 'text__center'
    });
    toast.present();
  }


  private initForm() {
    this.signinForm = this.builder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

}
