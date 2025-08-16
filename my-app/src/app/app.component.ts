import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    formData ={
      name :'',
      description:'',
      catagory:''
  }
  dataList : any[]=[]
  addData(){
    this.dataList.push({...this.formData});
    this.formData={name:'',description:'',catagory:''};
  }
}

















