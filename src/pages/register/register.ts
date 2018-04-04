import { Component, ViewChild, group } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';
import { EmailValidator } from '../../validators/email';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  @ViewChild('signup') signup: any;
  signupOne: FormGroup;
  submitAttemp: boolean = false;
  constructor(public navController: NavController,  public formBuilder: FormBuilder) {
    this.signupOne = formBuilder.group({
      nameFull: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
      confirmPassword: ['', Validators.required, Validators],
    }, { validator: this.matchingPasswords('password', 'confirmPassword')})
  }
  matchingPasswords(passwordKey: string, confirmPasswordKey: string){
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if(password.value !== confirmPassword.value){
        return {
          mismatchedPasswords: true
        };
      }
    }
  }
  BtnSend(){
    this.submitAttemp = true;

    if(!this.signupOne.valid){
      this.navController.push(LoginPage);
    }
    else{
      console.log("Success!");
      console.log(this.signupOne.value);
    }
  }

}
