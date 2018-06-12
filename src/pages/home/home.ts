import { AnnonceProvider } from './../../providers/annonce/annonce';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('myvisibility', [
      state('visible', style({height: 300, opacity: 1})),
      state('invisible', style({height: 0, opacity: 0})),
      transition('invisible => visible', [
        animate(300, keyframes([
          style({opacity: 0, height: 0, offset: 0}),
          style({opacity: .5, height: 150, offset: 0.5}),
          style({opacity: 1, height: 300, offset: 1.0})
        ]))
      ]),
      transition('visible => invisible', [
        animate(300, keyframes([
          style({opacity: 1, height: '*', offset: 0}),
          style({opacity: .5, height: 150, offset: 0.5}),
          style({opacity: 0, height: 0, offset: 1.0})
        ]))
      ]),
    ])
  ]
})
export class HomePage {

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
  
}
