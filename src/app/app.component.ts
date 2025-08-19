import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostcreateComponent } from './posts/postcreate/postcreate.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterOutlet,NavbarComponent,PostcreateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  myForm : FormGroup;
  user:any={name:"abdelrahman"};
  constructor(){
    this.myForm = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.minLength(2)]),
      email : new FormControl('',[Validators.required,Validators.email])
    })
  }

  onSubmit(){
    console.log(this.myForm.valid);
    this.myForm.patchValue({ name:"abdelrahman", email:"abdelrahmank12a@gmail.com" })
    this.myForm.markAllAsTouched();
    if(this.myForm.valid){
      console.log(this.myForm.valid);
    }else{
      alert("please full the form");
      return;
    }
  }
}