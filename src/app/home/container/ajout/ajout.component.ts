import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CrudService} from '../../../shared/crud.service'
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
  providers:[CrudService]
})
export class AjoutComponent implements OnInit {
kilometrage : number;
marque : string;
status : string;
  constructor(private http:HttpClient,private route : Router,private crud : CrudService) { }

  ngOnInit() {
  }

  createCar(){
    let data = {
      marque:this.marque,
      kilometrage:this.kilometrage,
      status:this.status
    }
    
    this.crud.addNewCar(data).subscribe(data=>{
      console.log(data);
      this.route.navigate(['/'])
    })
    
  }

}
