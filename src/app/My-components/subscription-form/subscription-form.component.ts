import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from '../models/subForm/form';
import { SubFormService } from '../service/subForm/sub-form.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  constructor(private subFormService:SubFormService, private toastr:ToastrService){}

  subForm!:Form;
  isEmailError:boolean=false;
  isSubscribed:boolean=false;

  OnSubmit(form:NgForm){
    this.subForm={
      name:form.value.name,
      email:form.value.email
    }
    let touched:boolean=false;
    this.subFormService.checkSubs(this.subForm.email).subscribe((val)=>{
      console.log(val);
      if(Object.keys(val).length>0 && touched==false){
        this.isEmailError=true;
        touched=true;
      }
      if(touched==false && Object.keys(val).length==0){
        this.isEmailError=false;
        this.isSubscribed=true;
        this.subFormService.saveData(this.subForm);
        touched=true;
      }
    })

    form.reset();

  }


}
