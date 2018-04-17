import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = { username:'', password:''}
  constructor(public navController: NavController,  public restProvider: RestProvider) {

  }
  BtnRegister(){
    this.navController.push(RegisterPage);
  }
  userLogin(){
    this.restProvider.userLogin(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
  
}
