import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AlertController, ToastController } from 'ionic-angular';
import { AppError } from '../../../../app/_common/app-error';
import { NotFoundError } from '../../../../app/_common/not-found-error';
import { BadInputError } from '../../../../app/_common/bad-input-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CapcodeService } from '../../../../app/_services/capcode.service';
import { Capcode } from '../../../../app/_models/capcode.model';

@Component({
  selector: 'page-capcode-overview',
  templateUrl: 'capcode-overview.html'
})

export class CapcodeOverviewPage implements OnInit {

  capcodes: Capcode[] = [];

  constructor(private capcodeService: CapcodeService,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) { }


  ngOnInit() {
    this.capcodeService.getAll().subscribe(
        data => this.capcodes = data.capcodes
    );

    //todo: remove after test
    this.capcodes.push({title: 'Reddingsbrigade Alarmploeg / strandambulance', capcode: 1523483});
  }


  addCapcode(data) {

    this.capcodeService.create(data.capcode)
      .subscribe(
        data => this.showToast(data),
        error => this.showToast(error)
      );
  }


  promptCapcode() {
    this.alertCtrl.create({
      title: 'Capcode toevoegen',
      message: `Voer de cijfers in van de capcode die je toe wilt voegen`,
      inputs: [{
        name: 'capcode',
        type: 'tel',
        placeholder: '0000000'
      }],
      buttons: [{
        text: 'Annuleren',
      }, {
        text: 'Voeg toe',
        handler: data => {
          this.addCapcode(data);
        }
      }]
    }).present();
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

