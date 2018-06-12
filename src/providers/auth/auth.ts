import { md5 } from './../../assets/md5';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SelectPopover } from 'ionic-angular';




@Injectable()
export class AuthProvider {
  user:any = {};

  constructor(public http: Http) {
    
    console.log('Hello AuthProvider Provider');
    this.http = http;
    this.getHttpUser();
  }

  checkAuth(email:String, password:String){
  
   var md5password=md5(password);
    var jsonUser;
    var test =false;
    console.log("checkAuth")
    console.log(this.user)
    jsonUser=JSON.parse(this.user);
    console.log(jsonUser);
    var length = Object.keys(jsonUser.users).length;
    console.log(length);
    for(var k in jsonUser.users) {
     
      if((email == jsonUser.users[k].MAIL && md5password==jsonUser.users[k].MDP)){
        console.log("auth OK" )
        test=true;
      }
      else{
        console.log("auth KO ")
      }
    }  
    return test;
  }
 

  async  getHttpUser(){
    var link = 'http://lebonangle.ddns.net:3000/api/users'
    this.http.get(link)
    .subscribe(res => {
    this.user = res['_body'];
    console.log(this.user);
});
return await this.user;
  };

  


}
