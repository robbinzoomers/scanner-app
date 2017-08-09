import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MessagesPage } from '../messages/messages';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {

  showSkip = true;

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public storage: Storage) {

  }

  startApp() {
    this.navCtrl.setRoot(MessagesPage)
      .then(() => {
        this.storage.set('hasSeenTutorial', 'true');
      }).catch((err: any) => {
        console.log(err);
      });
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    this.slides.update();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menuCtrl.enable(true);
  }

}
