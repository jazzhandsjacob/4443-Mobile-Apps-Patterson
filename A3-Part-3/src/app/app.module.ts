import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Angular Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Maps import
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

//Pages
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { LoggedPage } from '../pages/logged/logged';
import { TestingPage } from '../pages/testing/testing';

//My providers
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DatabaseProvider } from '../providers/database/database';

//Include the created environment file & firebase
import { firebaseConfig } from '../environments/firebase';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    TabsPage,
    MapPage,
    LoggedPage,
    TestingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    TabsPage,
    MapPage,
    LoggedPage,
    TestingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    AuthServiceProvider,
    DatabaseProvider
  ]
})
export class AppModule { }
