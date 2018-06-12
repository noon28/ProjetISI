import { md5 } from './../../assets/md5';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SelectPopover } from 'ionic-angular';
import {Md5} from 'ts-md5/dist/md5';



@Injectable()
export class AuthProvider {
  testuser:any = {};

  constructor(public http: Http) {
    
    console.log('Hello AuthProvider Provider');
    this.http = http;
    this.gethttpUser();
  }

  checkAuth(email:String, password:String){
    // API
    password=md5(password);
    var jsonUser;
    var test =false;
    console.log("checkAuth")
    console.log(this.testuser)
    jsonUser=JSON.parse(this.testuser);
    console.log(jsonUser);
    var length = Object.keys(jsonUser.users).length;
    console.log(length);
    for(var k in jsonUser.users) {
     
      if((email == jsonUser.users[k].MAIL && password==jsonUser.users[k].MDP)){
        console.log("auth OK" )
        test=true;
      }
      else{
        console.log("auth KO ")
      }
    }  
    return test;
  }
 

  async  gethttpUser(){
    var link = 'http://lebonangle.ddns.net:3000/api/users'
    this.http.get(link)
    .subscribe(res => {
    this.testuser = res['_body'];
    console.log(this.testuser);
});
return await this.testuser;
  };

  


}
