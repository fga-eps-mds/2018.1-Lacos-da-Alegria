import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
import { TabsPage } from '../tabs/tabs';

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
    this.navController.push(TabsPage);
    //this.navController.setRoot(TabsPage);
    
    // this.restProvider.userLogin(this.user).then((result) => {
    //   console.log(result);
    //   this.navController.push(ActivitiesListPage);
    //   this.navController.setRoot(TabsPage);
    // }, (err) => {
    //   console.log(err);
    // });
  }
  register(){
    this.navController.push(RegisterPage);
  }

}
