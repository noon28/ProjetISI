import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favori',
  templateUrl: 'favori.html',
})
export class FavoriPage {

  data : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // C'est la que l'on recupère les datas
    this.data = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoriPage');
  }

}
