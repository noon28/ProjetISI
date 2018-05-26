import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';


/**
 * Generated class for the ForgotpswdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpswd',
  templateUrl: 'forgotpswd.html',
})
export class ForgotpswdPage {
  
  email : String;
  

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpswdPage');
  }

  afficher(){
    console.log(this.email);
  }

  requestSend() {
    let alert = this.alertCtrl.create({
      title: 'Requête envoyée',
      subTitle: 'Si votre email est associé à un compte, le mot de passe vous sera envoyé sous 24h',
      buttons: ['OK']
    });
    alert.present();
  }

}
