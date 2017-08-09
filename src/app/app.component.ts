import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { AccountPage } from '../pages/account/account';
import { AuthLoginPage } from '../pages/auth-login/auth-login';
import { MessagesPage } from '../pages/messages/messages';
import { RadiusOverviewPage } from '../pages/settings/radius/overview/radius-overview';
import { CapcodeOverviewPage } from '../pages/settings/capcode/overview/capcode-overview';
import { AreaOverviewPage } from '../pages/settings/area/overview/area-overview';
import { RegionOverviewPage } from '../pages/settings/region/overview/region-overview';

import { UserService } from './_services/user.service';
import { MessageService } from './_services/message.service';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  signout?: boolean;
  params?: any;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {


  isLoggedIn: boolean = true;

  @ViewChild(Nav) nav: Nav;


  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'Abonnement', name: 'SubscriptionPage', component: AuthLoginPage, icon: 'lock' },
    { title: 'Logout', name: 'SignoutPage', component: MessagesPage, icon: 'log-out', signout: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Account', name: 'SigninPage', component: AuthLoginPage, index: 1, icon: 'person' }
  ];
  scannerPages: PageInterface[] = [
    { title: 'Scanner', name: 'MessagesPage', component: MessagesPage, index: 1, icon: 'radio' }
  ];
  filterPages: PageInterface[] = [
    { title: 'Straal', name: 'RadiusOverviewPage', component: RadiusOverviewPage, icon: 'locate' },
    { title: 'Plaats', name: 'AreaOverviewPage', component: AreaOverviewPage, icon: '_remove_home' },
    { title: 'Regio', name: 'RegionPage', component: RegionOverviewPage, icon: 'map' },
    { title: 'Capcode', name: 'CapcodeOverviewPage', component: CapcodeOverviewPage, icon: 'code-working' }
  ];
  settingPages: PageInterface[] = [
    { title: 'Pushmeldingen', name: 'PushPage', component: MessagesPage, icon: 'notifications' },
    { title: 'Geluiden', name: 'SoundPage', component: MessagesPage, icon: 'musical-notes' }
  ];

  rootPage: any;


  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              private feedData: MessageService,
              private events: Events,
              private userService: UserService) {

    this.rootPage = MessagesPage;

    this.feedData.load();
    this.platformReady();
    this.listenToLoginEvents();

    // this.isLoggedIn = true;
  }


  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }


  listenToLoginEvents() {
    this.events.subscribe('user:auth-login', () => {
      this.isLoggedIn = true;
    });

    this.events.subscribe('user:signout', () => {
      this.isLoggedIn = false;
    });
  }


  openScanner() {
    // this.nav.setRoot(MessagesPage);
  }


  openTutorial() {
    this.nav.setRoot(TutorialPage);
  }


  openPage(page: PageInterface) {
    let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      page.params.tabIndex = page.index;
    }

    // if the page have index set, we set it as root
    // otherwise we push the page and the backbutton is visible
    if (page.index) {
      this.nav.setRoot(page.name, page.params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    } else {
      this.nav.push(page.component, page.params);
    }

    if (page.signout === true) {
      // Give the menu time to close before changing to logged out
      this.userService.signout()
        .subscribe(data => {
          this.events.publish('user:signout');
          this.nav.setRoot(MessagesPage);
        }, error => {

          //todo: remove and place errorhandling when api is in place
          this.events.publish('user:signout');
          this.nav.setRoot(MessagesPage);
        });
    }
  }


  platformReady() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

}

