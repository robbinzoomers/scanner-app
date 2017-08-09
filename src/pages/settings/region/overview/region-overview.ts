import { Component, OnInit } from '@angular/core';

import { ToastMessage } from '../../../../app/_common/toast-message';

import { RegionAddPage } from '../add/region-add';
import { RegionService } from '../../../../app/_services/region.service';
import { Region } from '../../../../app/_models/region.model';

@Component({
  selector: 'page-region-overview',
  templateUrl: 'region-overview.html'
})

export class RegionOverviewPage implements OnInit {

  regionAddPage = RegionAddPage;
  regions: Region[] = [{title: 'Haaglanden', disciplines: []}];


  constructor(private regionService: RegionService,
              private toastMsg: ToastMessage) {

  }


  ngOnInit() {

    this.regionService.getAll()
      .subscribe(
        (data: Region[]) => this.regions = data,
        error => this.toastMsg.showToast(error.errorMessage)
      );
  }

}

