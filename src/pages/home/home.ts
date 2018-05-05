import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestUserProvider } from '../../providers/rest-user';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;

  constructor(public navCtrl: NavController, public RestUserProvider: RestUserProvider) {
    //this.getUsers();
  }

  userLogout(){
    this.navCtrl.push(LoginPage);
  }
  
}
