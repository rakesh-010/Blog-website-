import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../service/categories/categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categary-navbar',
  templateUrl: './categary-navbar.component.html',
  styleUrls: ['./categary-navbar.component.css']
})
export class CategaryNavbarComponent implements OnInit {

  constructor(private categoryService:CategoriesService){}


  userData!:Observable<any>;
  ngOnInit():void{
    this.categoryService.getData();
    this.userData=this.categoryService.categories;
  }
}
