import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileditPage } from '../profiledit/profiledit';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  userConnect : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // receive the data send by other pages
    this.userConnect= navParams.get('userCo');
    console.log(this.userConnect)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
  edit(){
    this.navCtrl.push(ProfileditPage,{userCo: this.userConnect});
  }

}
