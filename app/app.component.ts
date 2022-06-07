import { Component } from '@angular/core';
import { VechicleService } from './vechicle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  lists:any=[];
  serachtext:any;
  constructor(private service:VechicleService){
this.service.vehicallist().subscribe((data:any)=>{
 console.log(data)
  this.lists=data;

})
  }
}
