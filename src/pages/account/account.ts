import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
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
export class AccountPage {

  searchMenuVisible = 'invisible';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  
  toggleSearchMenu(){
    this.searchMenuVisible = (this.searchMenuVisible == 'visible') ? 'invisible' : 'visible';
  }

}
