import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/Posts/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  constructor(private postService:PostsService,private route:ActivatedRoute){}


  postData:any;
  similarPosts!:Observable<any>;

  ngOnInit():void{
    this.route.params.subscribe(val=>{

      this.postService.loadOnePost(val['id']).subscribe((post) =>{
        // this.post=post;
        console.log(post);
        this.postData=post;
        this.loadSimiarPosts(this.postData.category.categoryId);

      })

    })


  }

  loadSimiarPosts(catId:string){



    this.postService.loadSimilar(catId);
    this.similarPosts=this.postService.similarPosts;

  }

}
