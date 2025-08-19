import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../services/post.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-postcreate',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './postcreate.component.html',
  styleUrl: './postcreate.component.css',
  providers:[PostService ]

})
export class PostcreateComponent {
  postForm :FormGroup;

  constructor(private PostService :PostService ){
    this.postForm = new FormGroup({
      title : new FormControl('',[Validators.required]),
      body : new FormControl('',[Validators.required,Validators.minLength(100)])
    })
  }
  onSubmit() {
    if (this.postForm.valid) {
      this.PostService.createPost(this.postForm.value).subscribe(() => {
        alert('Post created successfully!');
        this.postForm.reset();
      });
    }
  }
  
}
