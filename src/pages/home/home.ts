import { AnnonceProvider } from './../../providers/annonce/annonce';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ,  public annonceP : AnnonceProvider) {
    this.annonceP.getHttpAnnonce();
  }
  useAnnonce()
  {
    this.annonceP.useAnnonces();
  }
  
}
