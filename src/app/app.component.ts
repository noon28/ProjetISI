import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// PAGES
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import {ForgotpswdPage} from '../pages/forgotpswd/forgotpswd';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any, icon: string, color: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Annonces Immobilières', component: HomePage, icon: 'md-home', color: ''},
      { title: 'Favoris', component: ListPage, icon: 'star', color: ''},
      { title: 'Profil', component: ListPage, icon: 'md-contact', color: ''}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}


