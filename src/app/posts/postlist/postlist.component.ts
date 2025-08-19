import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostService  } from '../services/post.services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css',
  providers :[PostService]
})
export class PostlistComponent {
  posts :any;
  constructor(private PostService : PostService ){

  }
  ngOnInit() {
    this.getPosts(); // هنا بندي عليها أول ما الكومبوننت يفتح
  }
  getPosts(){
    this.PostService.getPosts().subscribe(
      {
        next : (data)=>{
            console.log(data);
            this.posts = data || [];
        },
        error: (err)=>{
          console.log(err);
        },
        complete:()=>{

        }


    }

    )
  }
}

