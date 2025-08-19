import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {PostService } from '../services/post.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-postupdate',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,HttpClientModule],
  templateUrl: './postupdate.component.html',
  styleUrl: './postupdate.component.css',
  providers: [PostService]
})

export class PostupdateComponent implements OnInit {
  postForm : FormGroup;
  postId = 0;
  constructor(private PostService : PostService, private route: ActivatedRoute){
    this.postForm = new FormGroup({
      title : new FormControl('',[Validators.required]),
      body : new FormControl('',[Validators.required,Validators.minLength(100)])
    });
  }

  ngOnInit(){
        
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.getPost(this.postId);
    });
  }
  getPost(id: number) {
    this.PostService.getPost(id).subscribe((data) => {
      console.log(data);
      
      this.postForm.patchValue({
        title: data.title,
        body: data.body,
      });

    });
  }
  
    onSubmit() {
      if (this.postForm.valid) {
        this.PostService.updatePost(this.postId, this.postForm.value).subscribe(() => {
          alert('Post updated successfully!');
        });
      }
    }

  
}
