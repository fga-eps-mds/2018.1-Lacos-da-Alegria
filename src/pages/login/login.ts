import { Component } from '@angular/core';
import { NavController, MenuController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
//import { ActivitiesListPage } from '../activities-list/activities-list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = { username:'', password:''}
  constructor(public navController: NavController,  public restProvider: RestProvider, private menu: MenuController ) {

  }
  BtnRegister(){
    this.navController.push(RegisterPage);
  }

  userLogin(){
    //Esperando Função login ser implementada.
    // this.restProvider.userLogin(this.user).then((result) => {
    //   console.log(result);
    //   this.navController.push(ActivitiesListPage);
    // }, (err) => {
    //    console.log(err);
    // });
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  
}
