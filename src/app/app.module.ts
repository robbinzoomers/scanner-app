import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppErrorHandler } from './_common/app-error-handler';

import { GoogleMaps, Geocoder } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { IonicStorageModule } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard';
import { HttpModule } from "@angular/http";
import { TruncatePipe } from './_pipes/truncate.pipe';

import { ToastMessage } from "./_common/toast-message";

// PAGES
import { MyApp } from './app.component';
import { AccountPage } from '../pages/account/account';
import { AuthForgotPage } from '../pages/auth-forgot/auth-forgot';
import { AuthLoginPage } from '../pages/auth-login/auth-login';
import { AuthRegisterPage } from '../pages/auth-register/auth-register';
import { MessagesPage } from '../pages/messages/messages';
import { MessagesDetailPage } from '../pages/messages-detail/messages-detail';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { RadiusOverviewPage } from '../pages/settings/radius/overview/radius-overview';
import { RadiusAddPage } from '../pages/settings/radius/add/radius-add';
import { CapcodeOverviewPage } from '../pages/settings/capcode/overview/capcode-overview';
import { RegionOverviewPage } from '../pages/settings/region/overview/region-overview';
import { RegionAddPage } from '../pages/settings/region/add/region-add';
import { AreaOverviewPage } from '../pages/settings/area/overview/area-overview';
import { AreaAddPage } from '../pages/settings/area/add/area-add';

// SERVICES
import { AreaService } from './_services/area.service';
import { CapcodeService } from './_services/capcode.service';
import { MessageService } from './_services/message.service';
import { RadiusService } from './_services/radius.service';
import { RegionService } from './_services/region.service';
import { UserService } from './_services/user.service';


let links = [
  { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
  { component: AuthLoginPage, name: 'SigninPage', segment: 'login' },
  { component: AccountPage, name: 'AccountPage', segment: 'account' },
  { component: MessagesPage, name: 'MessagesPage', segment: 'scanner' },
  { component: RadiusOverviewPage, name: 'RadiusOverviewPage', segment: 'radius' },
  { component: CapcodeOverviewPage, name: 'CapcodeOverviewPage', segment: 'capcode' },
  { component: RegionOverviewPage, name: 'RegionOverviewPage', segment: 'region' },
  { component: AreaOverviewPage, name: 'AreaOverviewPage', segment: 'area' }
]


@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AuthForgotPage,
    AuthLoginPage,
    AuthRegisterPage,
    MessagesPage,
    MessagesDetailPage,
    TutorialPage,

    CapcodeOverviewPage,
    RadiusOverviewPage, RadiusAddPage,
    RegionOverviewPage, RegionAddPage,
    AreaOverviewPage, AreaAddPage,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }, {
      links: links
    }),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfSuMUP4uE_irAZtOnUIE58jJAWQZUDlQ',
      libraries: ['places']
    }),
    IonicStorageModule.forRoot({
      name: '__scanner',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    })
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    MyApp,
    AccountPage,
    AuthForgotPage,
    AuthLoginPage,
    AuthRegisterPage,
    MessagesPage,
    MessagesDetailPage,
    TutorialPage,

    CapcodeOverviewPage,
    RadiusOverviewPage, RadiusAddPage,
    RegionOverviewPage, RegionAddPage,
    AreaOverviewPage, AreaAddPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: LOCALE_ID, useValue: "nl-NL" },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    ToastMessage,
    GoogleMaps,
    Geocoder,
    Geolocation,
    Keyboard,
    AreaService,
    CapcodeService,
    MessageService,
    RadiusService,
    RegionService,
    UserService,
  ]
})
export class AppModule {}
