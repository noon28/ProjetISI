import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RegisterProvider {
  data:any;
  constructor(public http: Http) {
    console.log('Hello RegisterProvider Provider');
    this.http=http;
    this.data = {};
  }
  
  postUser(tableau : Array<any>){
    var jasonprepare ={nom:tableau[0],prenom:tableau[1],login:tableau[2],mdp:tableau[3],mail:tableau[4],adresse:tableau[5],cp:tableau[6],ville :tableau[7]};
    var link = "http://lebonangle.ddns.net:3000/api/users"
    this.http.post(link, jasonprepare)
        .subscribe(data => {
            this.data.response = data["_body"];
            console.log(this.data);
            //créer pop up 
        }, error => {
            console.log("Oooops!");
        });
  }
  updateUser(tableau : Array<any>,id:number){
    var jasonprepare ={nom:tableau[0],prenom:tableau[1],login:tableau[2],mdp:tableau[3],mail:tableau[4],adresse:tableau[5],cp:tableau[6],ville :tableau[7]};
    var link = "http://lebonangle.ddns.net:3000/api/users/"+id;
    console.log(link);
    this.http.put(link, jasonprepare)
        .subscribe(data => {
            this.data.response = data["_body"];
            console.log(this.data); 
        }, error => {
            console.log("Oooops!");
        });
  }
  

  
  




}
