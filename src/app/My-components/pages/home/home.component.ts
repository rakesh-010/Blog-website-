import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/Posts/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private postService:PostsService){}

  featuredPosts!:Observable<any>;
  latestPosts!:Observable<any>;
  ngOnInit():void{
    this.postService.getFeatured();
    this.featuredPosts=this.postService.featuredposts;


    this.postService.loadLatest();
    this.latestPosts=this.postService.latestPosts
  }
}
