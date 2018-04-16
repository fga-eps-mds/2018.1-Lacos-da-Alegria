import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-create-activity',
  templateUrl: 'create-activity.html'
})
export class CreateActivityPage {
  @ViewChild('signup') signup: any;
  signupOne: FormGroup;
  submitAttemp: boolean = false;
  constructor(public navController: NavController,  public formBuilder: FormBuilder) {
    this.signupOne = formBuilder.group({
      nameHospital: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
      description: ['', Validators.compose([Validators.maxLength(90), Validators.required])],
    })
  }

  BtnSend(){
    this.submitAttemp = true;
    console.log("Success!");
    console.log(this.signupOne.value);
  }

}
