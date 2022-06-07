import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VechicleService {
 




  constructor(private http:HttpClient) { }
 vehicallist(){
return this.http.get('https://random-data-api.com/api/vehicle/random_vehicle?size=30')
 }
}

