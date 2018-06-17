import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, MenuController } from 'ionic-angular';

// PAGES
import { HomePage } from '../home/home';
import { ProfilPage } from '../profil/profil';
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
  userEmail:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider,public alertCtrl:AlertController, public menu: MenuController ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillEnter(){
      this.menu.enable(false, 'Menu');
  }

  checkAuthentification(){
      var userConnect;
      if((this.email==null)||(this.password==null)){
        this.AlertFailedAuth();
      }
      else{
        userConnect=this.auth.checkAuth(this.email, this.password);
      }
      
    if(userConnect!=null){
      // send data to other pages
      this.navCtrl.setRoot(HomePage,{userCo: userConnect});
      this.navCtrl.setRoot(ProfilPage, {userCo: userConnect} );
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
    this.userEmail=this.auth.userMail();
    console.log("Inscription");
    this.navCtrl.push(RegisterPage,{userApp:this.userEmail});
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
