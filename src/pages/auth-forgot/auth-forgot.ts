import { Component } from '@angular/core';
import { IonicPage, ViewController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../app/_services/user.service';

@IonicPage()
@Component({
  selector: 'page-auth-forgot',
  templateUrl: 'auth-forgot.html',
})

export class AuthForgotPage {

  forgotForm: FormGroup;

  loading: any = false;

  constructor(private userService: UserService,
              private builder: FormBuilder,
              private viewCtrl: ViewController,
              private loadingCtrl: LoadingController) {
    this.initForm();
  }


  onPasswordForgot() {

    this.loading = this.loadingCtrl.create();
    this.loading.present();

    this.userService.resetPassword(this.forgotForm.value.email)
      .subscribe(
        data  => this.dismiss('een email is verstuurd'),
        error => this.dismiss(error)
      );
  }


  dismiss(message) {
    if (this.loading)
      this.loading.dismiss();

    this.viewCtrl.dismiss(message);
  }


  private initForm() {
    this.forgotForm = this.builder.group({
      'email': ['', Validators.required]
    });
  }

}
