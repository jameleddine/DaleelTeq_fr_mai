import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  getAllCars(){
    return this.http.get('http://localhost:3000/cars');
  }

  getCarById(id){
    return this.http.get('http://localhost:3000/cars/'+id);
  }

  updateCarById(id,data){
    return this.http.put('http://localhost:3000/cars/'+id,data);

  }

  deleteCarById(id){
    return this.http.delete('http://localhost:3000/cars/'+id);
  }

  addNewCar(data){
    return this.http.post('http://localhost:3000/cars',data);

  }

}
