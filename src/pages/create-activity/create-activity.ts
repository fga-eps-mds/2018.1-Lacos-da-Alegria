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
      idActivity: ['', Validators.compose([Validators.pattern("[0-3][0-9]"), Validators.required])],
      nameHospital: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
      volunteers: ['', Validators.compose([Validators.pattern("[0-3][0-9]"), Validators.required])],
      date: ['', Validators.compose([Validators.pattern('[0-3][0-9]/[0-1][0-9]*'), Validators.required])],
      duration: ['', Validators.compose([Validators.pattern('[0-3]:[0-5][0-9]*'), Validators.required])],
    })
  }

  BtnSend(){
    this.submitAttemp = true;
    console.log("Success!");
    console.log(this.signupOne.value);
  }

}
