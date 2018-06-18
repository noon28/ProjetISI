import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ProfileditPage } from '../profiledit/profiledit';
// PROVIDER
import { AuthProvider } from '../../providers/auth/auth';
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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth : AuthProvider,public menu: MenuController) {
    // receive the data send by other pages
    this.userConnect= navParams.get('userCo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
  ionViewWillEnter(){
    this.menu.enable(true, 'Menu');
  }
  edit(){
    this.navCtrl.push(ProfileditPage,{userCo: this.userConnect});
  }

}
