import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  checkInputEmpty(){
    this.missingparameter=false;

    if(this.nom == null){
      alert('Remplissez le champs Nom');
    }
    if(this.prenom == null){
      alert('Remplissez le champs Prenom');
    }
    if(this.email == null){
      alert('Remplissez le champs Email');
    }
    if(this.login == null){
      alert('Remplissez le champs Login');
    }
    if(this.mdp == null){
      alert('Remplissez le champs Mot de Passe');
    }
    if(this.adresse == null){
      alert('Remplissez le champs Adresse');
    }
    if(this.cp == null){
      alert('Remplissez le champs Code Postal');
    }
    if(this.ville == null){
      alert('Remplissez le champs Ville');
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
    this.navCtrl.push(LoginPage);
  }


}
