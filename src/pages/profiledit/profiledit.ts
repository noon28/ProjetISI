import { md5 } from './../../assets/md5';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

//PROVIDERS 
import { RegisterProvider } from './../../providers/register/register';

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
  people: Array<any>;
  nom : String;
  prenom : String;
  login : String;
  mdp : String;
  mdpnew :String;
  email : String;
  adresse : String;
  cp : Number;
  ville : String;
  missingparameter : Boolean; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public register : RegisterProvider) {
    this.userConnect= navParams.get('userCo');
    console.log(this.userConnect.MDP);
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
      this.mdp=this.userConnect.MDP;
      console.log(this.mdp);
      this.postUpdate();
    }
  }
  
  postUpdate(){

    this.people=[this.nom,this.prenom,this.login,this.mdp,this.email,this.adresse,this.cp,this.ville];
    this.register.updateUser(this.people,this.userConnect.ID);
  }

  AlertMissing(){
    let alert = this.alertCtrl.create({
      title: 'Oups ...',
      subTitle: 'Un ou des champ(s) sont manquants pour compléter votre inscription',
      buttons: ['OK']
    });
    alert.present();
  }
  updatePwd(){
    if(this.mdpnew!=null){
      if(md5(this.mdp)==this.userConnect.MDP){
        this.mdp=md5(this.mdpnew);
        console.log(this.mdp)
        console.log("this.updatePwd")
        this.postUpdate();
      }
    }
  }

}
