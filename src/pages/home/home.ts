import { AnnonceProvider } from './../../providers/annonce/annonce';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// PAGES
import { FavoriPage } from '../favori/favori';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('myvisibility', [
      state('visible', style({height: 500, opacity: 1,visibility: 'visible'})),
      state('invisible', style({height: 0, opacity: 0,visibility: 'hidden'})),
      transition('invisible => visible', [
        animate(300, keyframes([
          style({opacity: 0, height: 0,visibility: 'visible', offset: 0}),
          style({opacity: .5, height: 250, offset: 0.5}),
          style({opacity: 1, height: 500, offset: 1.0})
        ]))
      ]),
      transition('visible => invisible', [
        animate(300, keyframes([
          style({opacity: 1, height: '*', offset: 0}),
          style({opacity: .5, height: 250, offset: 0.5}),
          style({opacity: 0, height: 0,visibility: 'hidden',  offset: 1.0})
        ]))
      ]),
    ])
  ]
})
export class HomePage {

  dataToSend : any;
  searchMenuVisible = 'invisible';

  constructor(public navCtrl: NavController ,  public annonceP : AnnonceProvider) {
    this.annonceP.getHttpAnnonce();
  }
  useAnnonce(){
    this.annonceP.useAnnonces();
  }

  toggleSearchMenu(){
    this.searchMenuVisible = (this.searchMenuVisible == 'visible') ? 'invisible' : 'visible';
  }

  sendData(){
    // tu mets ce que tu veux et autant que tu veux dans l'objet JSON
    this.navCtrl.setRoot(FavoriPage, {data: this.dataToSend});
  }

  rechercher(){
    this.toggleSearchMenu();
  }
  
}
