import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-annonce',
  templateUrl: 'annonce.html',
})
export class AnnoncePage {

  annonce : any;
  titre : any;
  desc: any;
  cp: any;
  date: any;
  location: any;
  meuble: any;
  nbpiece: any;
  prix: any;
  superficie: any;
  type: any;
  ville: any;
  link: any;
  imageDispo : any = false;
  comeFrom : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    
  }

  ionViewWillEnter(){
    
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncePage');
    this.menu.enable(false, 'Menu');
    this.annonce = this.navParams.get('annonce');
    this.imageDispo = this.annonce.image != "";
    this.link = this.annonce.LINK;
    this.titre = this.annonce.TITRE;
    this.desc = this.annonce.DESCRIPTION;
    this.cp = this.annonce.CP;
    this.date = this.annonce.DATE_EN;
    this.location = this.annonce.LOCATION == 1 ? 'oui' : 'non';
    this.meuble = this.annonce.MEUBLE == 1 ? 'oui' : 'non';
    this.nbpiece = this.annonce.NBPIECES;
    this.prix = this.annonce.PRIX;
    this.superficie = this.annonce.SUPERFICIE;
    this.type = this.annonce.TYPEBIEN;
    this.ville = this.annonce.VILLE;
    this.comeFrom = this.navParams.get("comeFrom");
    console.log(this.annonce);
    console.log(this.comeFrom);
  }

  ajouterFav(){

  }
  
  retirerFav(){
    
  }

  
}
