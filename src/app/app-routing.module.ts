import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './My-components/pages/home/home.component';
import { SingleCategoryComponent } from './My-components/pages/single-category/single-category.component';
import { SinglePostComponent } from './My-components/pages/single-post/single-post.component';
import { ContactUsComponent } from './My-components/pages/contact-us/contact-us.component';
import { TermsNConditionsComponent } from './My-components/pages/terms-n-conditions/terms-n-conditions.component';
import { AboutUsComponent } from './My-components/pages/about-us/about-us.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'category/:category/:id',component:SingleCategoryComponent},
  {path:'post/:id',component:SinglePostComponent},

  {path:'contact-us',component:ContactUsComponent},
  {path:'terms',component:TermsNConditionsComponent},
  {path:'about-us',component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
