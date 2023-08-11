import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  ngOnInit(): void {
   
  }
   onSumbit(f:NgForm){ 
     console.log(f);
     
   }
   getValue(f:any){
     console.log(f);
   }
}
