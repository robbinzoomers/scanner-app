import { Component } from '@angular/core';
import { IonicPage, ViewController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../app/_services/user.service';

@IonicPage()
@Component({
  selector: 'page-auth-register',
  templateUrl: 'auth-register.html'
})

export class AuthRegisterPage {

  signupForm: FormGroup;

  loading: any = false;

  constructor(private userService: UserService,
              private builder: FormBuilder,
              private viewCtrl: ViewController,
              private loadingCtrl: LoadingController) {
    this.initForm();
  }


  onSignup() {

    this.loading = this.loadingCtrl.create();
    this.loading.present();


    this.userService.signup(this.signupForm.value.email, this.signupForm.value.password)
      .subscribe(
        data  => this.dismiss(data),
        error => this.dismiss(error)
      );
  }


  dismiss(message) {
    if (this.loading)
      this.loading.dismiss();

    this.viewCtrl.dismiss(message);
  }


  private initForm() {
    this.signupForm = this.builder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

}
