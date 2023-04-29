import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './My-components/layouts/header/header.component';
import { FooterComponent } from './My-components/layouts/footer/footer.component';
import { CategaryNavbarComponent } from './My-components/layouts/category-navbar/categary-navbar.component';
import { HomeComponent } from './My-components/pages/home/home.component';
import { SingleCategoryComponent } from './My-components/pages/single-category/single-category.component';
import { SinglePostComponent } from './My-components/pages/single-post/single-post.component';
import { TermsNConditionsComponent } from './My-components/pages/terms-n-conditions/terms-n-conditions.component';
import { ContactUsComponent } from './My-components/pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './My-components/subscription-form/subscription-form.component';
import { CommentFormComponent } from './My-components/comments/comment-form/comment-form.component';
import { CommentListComponent } from './My-components/comments/comment-list/comment-list.component';
import { AboutUsComponent } from './My-components/pages/about-us/about-us.component';
import { PostCardComponent } from './My-components/layouts/post-card/post-card.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategaryNavbarComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsNConditionsComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutUsComponent,
    PostCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
