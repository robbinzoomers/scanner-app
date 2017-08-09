import { Component, OnInit } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { RegionService } from '../../../../app/_services/region.service';

@Component({
  selector: 'page-region-add',
  templateUrl: 'region-add.html'
})

export class RegionAddPage implements OnInit {

  regions: any = [];

  constructor(private regionService: RegionService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.regionService.getDefault().subscribe(
      (data: any) => this.regions = data.regions,
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
