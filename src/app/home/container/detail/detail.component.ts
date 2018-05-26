import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../../../shared/crud.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[CrudService]
})
export class DetailComponent implements OnInit {
  idCar : any;
  car : any = [];
  constructor(private route: ActivatedRoute,private http:HttpClient,private re : Router,private crud: CrudService) {

    this.route.params.subscribe( params =>{
      this.idCar = params['id']
      console.log(this.idCar)
    });
}
  ngOnInit() {
    this.crud.getCarById(this.idCar).subscribe(data=>{
      this.car = data;
      this.car.affected_date = this.car.affected_date.slice(0,10);

    })
  }
  editCar(){
    this.crud.updateCarById(this.idCar,this.car).subscribe(data=>{
      console.log(data)
      this.re.navigate(['/']);
    })
    
  }

}
