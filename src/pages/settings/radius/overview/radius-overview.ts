import { Component, OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { RadiusAddPage } from '../add/radius-add';
import { RadiusService } from '../../../../app/_services/radius.service';
import { Radius } from '../../../../app/_models/radius.model';

@Component({
  selector: 'page-radius-overview',
  templateUrl: 'radius-overview.html'
})

export class RadiusOverviewPage implements OnInit {

  radiusAddPage = RadiusAddPage;
  radiuses: Radius[] = [{address: 'Michiel de ruijterstraat 32, ter Heijde', distance: 3000, latitude: 52.029473, longitude: 4.166857}];

  constructor(private radiusService: RadiusService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.radiusService.getAll()
      .subscribe(
        (data: Radius[]) => this.radiuses = data,
        error => this.showToast(error.errorMessage)
      );
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

