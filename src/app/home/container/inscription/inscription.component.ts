import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
 name:string;
 email:string;
 password:string;
 confirmpassword:string;
 users :any = [{}];
 myform:FormGroup;
  constructor(private route:Router) { }

  ngOnInit() {
    
    this.myform = new FormGroup({
      formname : new FormControl('',Validators.required),
      formemail : new FormControl('',[Validators.required,Validators.email]),
      formpassword : new FormControl('',[Validators.required,Validators.minLength(8)]),
      formconfirmpassword : new FormControl('',[Validators.required,Validators.minLength(8)]),
    })

    if(localStorage.getItem('users')){
      this.users = JSON.parse(localStorage.getItem('users'));
    }
   
  }

  register(){
    let data = {
      Name:this.name,
      Email:this.email,
      Password:this.password
    }
      this.users.push(data)    
    localStorage.setItem('users',JSON.stringify(this.users));
    this.route.navigate(['login'])

  }

}
