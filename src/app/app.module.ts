import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MyApp } from './app.component';

// PAGES
import { HomePage } from '../pages/home/home';
import { FavoriPage } from '../pages/favori/favori';
import { ProfilPage } from '../pages/profil/profil';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { ForgotpswdPage } from './../pages/forgotpswd/forgotpswd';
import { AccountPage } from './../pages/account/account';
// PROVIDER
import { AuthProvider } from '../providers/auth/auth';
import { RegisterProvider } from '../providers/register/register';
import { AnnonceProvider } from '../providers/annonce/annonce';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ForgotpswdPage,
<<<<<<< HEAD
    FavoriPage,
    ProfilPage
=======
    ListPage,
    AccountPage
>>>>>>> feature
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ForgotpswdPage,
<<<<<<< HEAD
    FavoriPage,
    ProfilPage
=======
    AccountPage
>>>>>>> feature
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    RegisterProvider,
    AnnonceProvider
  ]
})
export class AppModule {}
