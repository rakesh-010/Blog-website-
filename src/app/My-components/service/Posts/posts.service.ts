import { Injectable } from '@angular/core';
import { FieldValue, Firestore, collection, collectionData, doc, docData, increment, limit, orderBy, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:Firestore) { }

  featuredposts!:Observable<any>;
  latestPosts!:Observable<any>;
  categoryPosts!:Observable<any>;
  similarPosts!:Observable<any>;

  getFeatured(){
    const collectionInstance=collection(this.afs,'Posts');
    const featured = query(collectionInstance,where('isFeatured','==',true),limit(4));
    this.featuredposts=collectionData(featured,{idField:'id'});
  };

  loadLatest(){
    const collectionInstance=collection(this.afs,'Posts');
    const latest = query(collectionInstance,orderBy('createdAt','desc'));
    this.latestPosts=collectionData(latest,{idField:'id'});
  };

  loadCategoryPosts(categoryId:string){
    const collectionInstance=collection(this.afs,'Posts');
    const categoryPost = query(collectionInstance,where('category.categoryId','==',categoryId));
    this.categoryPosts=collectionData(categoryPost,{idField:'id'});
  };

  loadOnePost(id:string){
    const docInstance= doc(this.afs,'Posts',id);
    return docData(docInstance,{idField:'id'})
  }

  loadSimilar(categoryId:string){
    const collectionInstance=collection(this.afs,'Posts');
    const similarPost = query(collectionInstance,where('category.categoryId','==',categoryId),limit(3));
    this.similarPosts=collectionData(similarPost,{idField:'id'});
  }

  countViews(id:string){
    // const docInstance= doc(this.afs,'Posts',id);
    // updateDoc(docInstance,['views:FieldValue.increment(1)'])
  }
}
