import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// PAGES
import { HomePage } from '../home/home';

// PROVIDER
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email : String;
  password : String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkAuthentification(){
    if(this.auth.checkAuth(this.email, this.password)){
      this.navCtrl.setRoot(HomePage);
    }
  }

  afficher(){
    console.log(this.email);
  }

}
