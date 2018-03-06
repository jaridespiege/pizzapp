import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FireDataServiceProvider } from '../providers/fire-data-service/fire-data-service';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { ConfirmPage } from '../pages/confirm/confirm';


var config = {
  apiKey: "AIzaSyAwZN2cGlKdOdi3ziXboaFKMJBXwMnmlcE",
    authDomain: "c08les-693df.firebaseapp.com",
    databaseURL: "https://c08les-693df.firebaseio.com",
    projectId: "c08les-693df",
    storageBucket: "",
    messagingSenderId: "403667197748"
  };



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
  
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RestaurantPage,
    ConfirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RestaurantPage,
    ConfirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    FireDataServiceProvider,
    Camera,
  ]
})
export class AppModule {}
