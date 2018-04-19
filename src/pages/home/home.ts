import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    //this.getUsers();
  }

  userLogout(){
    this.navCtrl.push(LoginPage);
  }
  
}
