import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AnnonceProvider {
  annonces:any ={};

  constructor(public http: Http) {
    console.log('Hello AnnonceProvider Provider');
   this.http=http;
   this.getHttpAnnonce();
  }
  
  useAnnonces(){
    var jsonAnnonces;
    jsonAnnonces=JSON.parse(this.annonces)
    console.log(jsonAnnonces)
    console.log("test")
    return jsonAnnonces;
  }



  async  getHttpAnnonce(){
    var link = 'http://lebonangle.ddns.net:3000/api/annonces'
    this.http.get(link)
    .subscribe(res => {
    this.annonces = res['_body'];
    console.log(this.annonces);
});
return await this.annonces;
  };

  

}
