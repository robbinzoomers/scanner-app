import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from 'ionic-angular';

import { AreaAddPage } from '../add/area-add';
import { AreaService } from '../../../../app/_services/area.service';
import { Area } from '../../../../app/_models/area.model';

@Component({
  selector: 'page-area-overview',
  templateUrl: 'area-overview.html'
})

export class AreaOverviewPage implements OnInit {

  areaAddPage = AreaAddPage;
  areas: Area[] = [{place: 'Monster'}];
  area: Area;

  constructor(private areaService: AreaService,
              private modalCtrl: ModalController,
              private toastCtrl: ToastController) { }


  ngOnInit() {
    this.areaService.getAll()
      .subscribe(
        (data: Area[]) => this.areas = data,
        error => this.showToast(error.errorMessage)
      );
  }


  showAddressModal () {
    const modal = this.modalCtrl.create(AreaAddPage);
    modal.onDidDismiss(data => {
      this.area.place = data;
    });
    modal.present();
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

