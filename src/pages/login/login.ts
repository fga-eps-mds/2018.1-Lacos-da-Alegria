import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestUserProvider } from '../../providers/rest-user';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = { username:'', password:''}
  constructor(public navController: NavController,  public RestProvider: RestUserProvider) {

  }
  BtnRegister(){
    this.navController.push(RegisterPage);
  }

  userLogin(){
    this.RestProvider.userLogin(this.user).then((result) => {
      console.log(result);
      this.navController.push(HomePage);
    }, (err) => {
      console.log(err);
    });
  }

}
