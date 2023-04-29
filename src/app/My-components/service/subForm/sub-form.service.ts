import { Injectable } from '@angular/core';
import { DocumentSnapshot, Firestore, addDoc, collection,collectionData,query, where } from '@angular/fire/firestore';
import { Form } from '../../models/subForm/form';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class SubFormService {

  constructor( private afs:Firestore,private toastr:ToastrService) { }
  saveData(subscriber:Form){
    const collectionInstance=collection(this.afs,'Subscribers');

    addDoc(collectionInstance,subscriber).then(()=>{
      // this.toastr.success("Subscribed Successfully")
      console.log("Successfully added");
    })
    .catch((error)=>console.log(error));
  };

  checkSubs(subEmail:string){
    const collectionInstance=collection(this.afs,'Subscribers');

    const dup=query(collectionInstance,where('email','==',subEmail));
    return collectionData(dup)
  };
}
