import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AnnoncePage } from '../annonce/annonce';


@IonicPage()
@Component({
  selector: 'page-favori',
  templateUrl: 'favori.html',
})
export class FavoriPage {

  annonces : any = [{"ID":1,"TITRE":"T2 - Metro Motte Picquet Grenelle","DESCRIPTION":"Description Loue appartement type 2 de 35m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1200Euro(s)/mois CC","SUPERFICIE":35,"CP":75014,"DELETED":0,"DATE_EN":"2018-05-20T00:00:00.000Z","ID_AUTHOR":1,"PRIX":1200,"LINK":"https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s","TYPEBIEN":"Appartement","MEUBLE":0,"NBPIECES":2,"VILLE":"Paris","LOCATION":1,"image":"http://mmf.logic-immo.com/mmf/ads/photo-prop-800x600/837/1/16c0455f-7770-4bfc-8501-b21652fd54b4.jpg"},{"ID":2,"TITRE":"T3 - Metro Motte Picquet Grenelle","DESCRIPTION":"Description Loue appartement type 3 de 40m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1500Euro(s)/mois CC","SUPERFICIE":40,"CP":75015,"DELETED":0,"DATE_EN":"2017-11-12T00:00:00.000Z","ID_AUTHOR":2,"PRIX":1500,"LINK":"https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s","TYPEBIEN":"Appartement","MEUBLE":1,"NBPIECES":3,"VILLE":"Paris","LOCATION":1, "image":""}];


  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoriPage');
  }

  ionViewWillEnter(){
    this.menu.enable(true, 'Menu');
  }

  detailAnnonce(a : any){
    this.navCtrl.push(AnnoncePage, {"annonce": a, "comeFrom": "favori"})
  }

}
