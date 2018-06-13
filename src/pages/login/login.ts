import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

// PAGES
import { HomePage } from '../home/home';
import { RegisterPage } from './../register/register';
import { ForgotpswdPage } from './../forgotpswd/forgotpswd';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider,public alertCtrl:AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  checkAuthentification(){
    if(this.auth.checkAuth(this.email, this.password)){
      this.navCtrl.setRoot(HomePage,);
    }
    else{
      this.AlertFailedAuth()
      //afficher un label identifiant incorrect
    }
  }
  
  afficher(){
    console.log(this.email);
    console.log(this.password);
  }
  mdpforgot(){
    console.log("Mot de passe oublié");
    this.navCtrl.push(ForgotpswdPage);
  }
  register(){
    console.log("Inscription");
    this.navCtrl.push(RegisterPage);
    //this.navCtrl.setRoot(RegisterPage);
  }
  AlertFailedAuth(){
    let alert = this.alertCtrl.create({
      title: 'Oups ...',
      subTitle: 'Identifiant incorrects',
      buttons: ['Retry']
    });
    alert.present();
  }
  
}
