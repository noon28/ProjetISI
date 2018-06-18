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
  ville_cp : any = "";
  loyer_min : any = "";
  loyer_max : any = "";
  surf_min : any = "";
  surf_max : any = "";
  piece_min : any = "";
  piece_max : any = "";
  maison : any = false;
  appart : any = false;
  terrain : any = false;
  parking : any = false;
  autre : any = false;

  annonces : any = [{"ID":1,"TITRE":"T2 - Metro Motte Picquet Grenelle","DESCRIPTION":"Description Loue appartement type 2 de 35m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1200Euro(s)/mois CC","SUPERFICIE":35,"CP":75014,"DELETED":0,"DATE_EN":"2018-05-20T00:00:00.000Z","ID_AUTHOR":1,"PRIX":1200,"LINK":"https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s","TYPEBIEN":"Appartement","MEUBLE":0,"NBPIECES":2,"VILLE":"Paris","LOCATION":1,"image":"http://mmf.logic-immo.com/mmf/ads/photo-prop-800x600/837/1/16c0455f-7770-4bfc-8501-b21652fd54b4.jpg"},{"ID":2,"TITRE":"T3 - Metro Motte Picquet Grenelle","DESCRIPTION":"Description Loue appartement type 3 de 40m2 entre les métros motte picquet grenelle et commerce   Loué non meublé  Situé en RDC sur cour arborée  Cuisine ouverte sur le salon Salle d,eau avec douche à l,italienne  Chambre   Dispo début juin   1500Euro(s)/mois CC","SUPERFICIE":40,"CP":75015,"DELETED":0,"DATE_EN":"2017-11-12T00:00:00.000Z","ID_AUTHOR":2,"PRIX":1500,"LINK":"https://www.leboncoin.fr/locations/1435318623.htm/?ca=12_s","TYPEBIEN":"Appartement","MEUBLE":1,"NBPIECES":3,"VILLE":"Paris","LOCATION":1, "image":""}];
  annoncesfiltr : any = [];
  data: any = [];
  userConnect : any;
  filtre : any = false;
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
    if(!this.checkFiltre()){
      this.filtre = false;
    }
  }

  rechercher(){
    this.annoncesfiltr = []
    this.filtrer();
    this.toggleSearchMenu();
  }

  filtrer(){
    if(this.checkFiltre()){
      this.annoncesfiltr = this.annonces;
      var annonceTemp : any = [];
      this.filtre = true;

      // VILE - CP
      if(this.ville_cp != ""){
        for(let a of this.annoncesfiltr){
          var ville = a.VILLE;
          if(this.ville_cp.toLowerCase() == ville.toLowerCase() || this.ville_cp == a.CP){
            annonceTemp.push(a);
          }
        }
        this.annoncesfiltr = annonceTemp;
        annonceTemp = [];
      }

      // LOYER MIN
      if(this.loyer_min != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.PRIX >= this.loyer_min){
            annonceTemp.push(a);
          }
        }
        this.annoncesfiltr = annonceTemp;
        annonceTemp = [];
      }

      // LOYER MAX
      if(this.loyer_max != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.PRIX <= this.loyer_max){
            annonceTemp.push(a);
          }
        }
        this.annoncesfiltr = annonceTemp;
        annonceTemp = [];
      }

      // SURFACE MIN
      if(this.surf_min != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.SUPERFICIE >= this.surf_min){
            annonceTemp.push(a);
          }
        }
        this.annoncesfiltr = annonceTemp;
        annonceTemp = [];
      }

      // SURFACE MAX
      if(this.surf_max != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.SUPERFICIE <= this.surf_max){
            annonceTemp.push(a);
          }
        }
        this.annoncesfiltr = annonceTemp;
        annonceTemp = [];
      }

      // PIECE MIN
      if(this.piece_min != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.NBPIECES >= this.piece_min){
            annonceTemp.push(a);
          }
        }
        this.annoncesfiltr = annonceTemp;
        annonceTemp = [];
      }

      // PIECE MAX
      if(this.piece_max != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.NBPIECES <= this.piece_max){
            annonceTemp.push(a);
          }
        }
        this.annoncesfiltr = annonceTemp;
        annonceTemp = [];
      }

      // MAISON
      if(this.maison != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.TYPEBIEN == 'Maison'){
            annonceTemp.push(a);
          }
        }
      }

      // APPARTEMENT
      if(this.appart != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.TYPEBIEN == 'Appartement'){
            annonceTemp.push(a);
          }
        }
      }

      // PARKING
      if(this.parking != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.TYPEBIEN == 'Parking'){
            annonceTemp.push(a);
          }
        }
      }

      // TERRAIN
      if(this.terrain != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.TYPEBIEN == 'Terrain'){
            annonceTemp.push(a);
          }
        }
      }

      // AUTRE
      if(this.autre != "" && this.annoncesfiltr != []){
        for(let a of this.annoncesfiltr){
          if(a.TYPEBIEN == 'Autre'){
            annonceTemp.push(a);
          }
        }
      }

      this.annoncesfiltr = (this.maison != "" || this.terrain != "" || this.autre != "" || this.appart != "" || this.parking != "") ? annonceTemp : this.annoncesfiltr;

    }else{
      this.filtre = false;
    }
  }

  checkFiltre(){
    var check = this.ville_cp != "" || this.loyer_min != "" || this.loyer_max != "" || this.surf_max != "" || this.surf_min != ""|| this.piece_min != "" || this.piece_max != "" || this.maison || this.terrain || this.parking || this.appart || this.autre ;
    console.log("check ", check);
    return check;
  }

  detailAnnonce(a : any){
    this.navCtrl.push(AnnoncePage, {"annonce": a, "comeFrom": "home"})
  }

  vider(){
    this.ville_cp = "";
    this.loyer_min = "";
    this.loyer_max = "";
    this.surf_min = "";
    this.surf_max = "";
    this.piece_min = "";
    this.piece_max = "";
    this.maison = false;
    this.appart = false;
    this.terrain = false;
    this.parking = false;
    this.autre = false; 
    this.filtre = false;
  }


  
}
