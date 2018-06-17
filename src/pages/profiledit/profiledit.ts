import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfileditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiledit',
  templateUrl: 'profiledit.html',
})
export class ProfileditPage {
  userConnect : any;

  nom : String;
  prenom : String;
  login : String;
  mdp : String;
  email : String;
  adresse : String;
  cp : Number;
  ville : String;
  missingparameter : Boolean; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.userConnect= navParams.get('userCo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileditPage');
  }

  checkInputEmpty(){
    this.missingparameter=false;

    if(this.nom == null ||this.prenom == null||this.email == null||this.login == null||this.adresse == null||this.cp == null||this.ville == null){
     this.AlertMissing();
     this.missingparameter=true;
     }
    if(!this.missingparameter)
    {
      
      this.postUpdate();
    }
    
  }
  
  postUpdate(){

  }
  AlertMissing(){
    let alert = this.alertCtrl.create({
      title: 'Oups ...',
      subTitle: 'Un ou des champ(s) sont manquants pour compléter votre inscription',
      buttons: ['OK']
    });
    alert.present();
  }

}
