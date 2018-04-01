import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navController: NavController) {

  }
  BtnRegister(){
    this.navController.push(RegisterPage);
  }
  BtnLogIn(){
    
  }

}
