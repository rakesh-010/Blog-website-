import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../service/Posts/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute, private postService:PostsService){}

  categoryPosts!:Observable<any>;
  category!:string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val)=>{
      console.log(val);
      this.category=val['category'];
      this.postService.loadCategoryPosts(val['id']);
      this.categoryPosts=this.postService.categoryPosts;

    })
  }

}
