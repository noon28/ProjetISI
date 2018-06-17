import { AnnonceProvider } from './../../providers/annonce/annonce';
import { Component } from '@angular/core';
import { NavController,NavParams, MenuController } from 'ionic-angular';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// PAGES
import { AnnoncePage } from '../annonce/annonce';


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

  // Recherche variable
  ville_cp : any;
  loyer_min : any;
  loyer_max : any;
  surf_min : any;
  surf_max : any;
  piece_min : any;
  piece_max : any;
  maison : any;
  appart : any;
  terrain : any;
  parking : any;
  autre : any; 

  annonces : any = [{"ID":1,"TITRE":"T2 - Metro Motte Picquet Grenelle","DESCRIPTION":"Description Loue appartement type 2 de 35m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1200Euro(s)/mois CC","SUPERFICIE":35,"CP":75014,"DELETED":0,"DATE_EN":"2018-05-20T00:00:00.000Z","ID_AUTHOR":1,"PRIX":1200,"LINK":"https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s","TYPEBIEN":"Appartement","MEUBLE":0,"NBPIECES":2,"VILLE":"Paris","LOCATION":1,"image":"http://mmf.logic-immo.com/mmf/ads/photo-prop-800x600/837/1/16c0455f-7770-4bfc-8501-b21652fd54b4.jpg"},{"ID":2,"TITRE":"T3 - Metro Motte Picquet Grenelle","DESCRIPTION":"Description Loue appartement type 3 de 40m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1500Euro(s)/mois CC","SUPERFICIE":40,"CP":75015,"DELETED":0,"DATE_EN":"2017-11-12T00:00:00.000Z","ID_AUTHOR":2,"PRIX":1500,"LINK":"https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s","TYPEBIEN":"Appartement","MEUBLE":1,"NBPIECES":3,"VILLE":"Paris","LOCATION":1, "image":""}];
  annoncesfiltr : any = null;
  data: any = [];
  userConnect : any;
  flitre : any = false;
  searchMenuVisible = 'invisible';

  constructor(public navCtrl: NavController ,  public annonceP : AnnonceProvider,public navParams: NavParams, public menu: MenuController ) {
    this.annonceP.getHttpAnnonce();
    this.userConnect= navParams.get('userCo');
  }

  ionViewWillEnter(){
      this.menu.enable(true, 'Menu');
  }

  useAnnonce(){
    this.annonceP.useAnnonces();
  }

  toggleSearchMenu(){
    this.searchMenuVisible = (this.searchMenuVisible == 'visible') ? 'invisible' : 'visible';
  }

  rechercher(){
    this.filtrer();
    this.toggleSearchMenu();
  }

  filtrer(){
    if(this.checkFiltre){
      this.flitre = true;
      if(this.ville_cp != ""){
        this.data = this.annonces.filter((item) =>{
          var cp : String = item.CP;
          console.log("item cp", item.CP);
          return  cp.toLowerCase().indexOf(this.ville_cp.toLowerCase()) > -1;;
        })
      }
    }
    
  }

  checkFiltre(){
    return this.ville_cp != null || this.loyer_min != null || this.loyer_max != null || this.surf_max != null || this.surf_min != null|| this.piece_min != null || this.piece_max != null || this.maison || this.terrain || this.parking || this.appart || this.autre ;
  }

  detailAnnonce(a : any){
    this.navCtrl.push(AnnoncePage, {"annonce": a, "comeFrom": "home"})
  }


  
}
