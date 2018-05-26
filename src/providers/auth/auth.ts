import { Injectable } from '@angular/core';


@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  checkAuth(email:String, password:String){
    // API
    if(!(email == "arnaud" && password=="test")){
      return(false);
    }
    else{
    return (true);  
    }
  }

}
