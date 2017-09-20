import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ListasService } from '../services/service.listas';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetallePage } from '../pages/detalle/detalle';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    ListasService
  ]
})
export class AppModule {}
