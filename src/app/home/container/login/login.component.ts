import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email:string;
password:string;
  constructor(private route : Router) { }

  ngOnInit() {
  }
  login(){
    let users : any = [];
    users = JSON.parse(localStorage.getItem('users'));
    for(let i = 0; i<users.length; i++){
      if(users[i].Email == this.email && users[i].Password == this.password){
        this.route.navigate(['/'])
      }
    }
  }

}
