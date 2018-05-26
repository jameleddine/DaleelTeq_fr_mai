import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private route : Router) { }

  getURLInfo(){
    if(this.route.url == '/login' ||this.route.url == '/inscription'){
      return false;
    }
    else{
      return true;
    }
  }
}
