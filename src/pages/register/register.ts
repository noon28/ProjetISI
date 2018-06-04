import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

// PAGES
import { HomePage } from '../home/home';
import { LoginPage } from './../login/login';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styles: [`
    .ng-valid { border-color: green; }
    .ng-invalid { border-color: red; }    
  `]
})
export class RegisterPage {
    nom : String;
    prenom : String;
    login : String;
    mdp : String;
    email : String;
    adresse : String;
    cp : Number;
    ville : String;
    missingparameter : Boolean; 
    emailAlready : Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  checkInputEmpty(){
    this.missingparameter=false;

    if(this.nom == null ||this.prenom == null||this.email == null||this.login == null||this.mdp == null||this.adresse == null||this.cp == null||this.ville == null){
     this.AlertMissing();
     this.missingparameter=true;
     }
    if(!this.missingparameter)
    {
      this.registerUser();
    }
    
  }
  registerUser(){
    console.log('RegisterAct');
    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.login);
    console.log(this.mdp);
    console.log(this.email);
    console.log(this.adresse);
    console.log(this.cp);
    console.log(this.ville);
    //PoPuP pour confirmer l'inscription et retour à la page de co 
    this.navCtrl.push(LoginPage);
    // POST API 
    //PoPuP pour confirmer l'inscription et retour à la page de co 
    //this.navCtrl.push(LoginPage);
  }
  AlertMissing(){
    let alert = this.alertCtrl.create({
      title: 'Oups ...',
      subTitle: 'Un ou des champ(s) sont manquants pour compléter votre inscription',
      buttons: ['OK']
    });
    alert.present();
  }
  CheckEmail(){
    this.emailAlready=false;
  }
  AlertEmailAlready(){
    
    if(this.emailAlready==true){
      let alert = this.alertCtrl.create({
        title: 'Inscription',
        subTitle: 'Votre email est déja associé à un compte',
        buttons: [
          {
            text:'Connexion',
            role:'connexion',
            handler: data => {
              this.navCtrl.push(LoginPage);
            }
    
          },
          {
            text:'Cancel',
            role:'cancel'
          }
        ]        
      });
      alert.present();
    }
  }


}
