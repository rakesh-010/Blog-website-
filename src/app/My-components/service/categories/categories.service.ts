import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs:Firestore) { }

  categories!:Observable<any>;
  getData(){
    const collectionInstance=collection(this.afs,'newCategory');
    this.categories=collectionData(collectionInstance,{idField:'id'});
  };
}
