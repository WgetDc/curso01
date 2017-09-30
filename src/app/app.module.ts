import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ListasService } from '../services/service.listas';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetallePage } from '../pages/detalle/detalle';
import { Camera } from '@ionic-native/camera';

export const firebaseConfig = {
  apiKey: "AIzaSyCVTUrX2zSS-RentYMeVRCf24un-vDSX5M",
  authDomain: "curso01-1ec1e.firebaseapp.com",
  databaseURL: "https://curso01-1ec1e.firebaseio.com",
  storageBucket: "curso01-1ec1e.appspot.com",
  messagingSenderId: '464031368095'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListasService,
    Camera
  ]
})
export class AppModule {}
