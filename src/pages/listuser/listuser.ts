import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestUserProvider } from '../../providers/rest-user';

import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-listuser',
  templateUrl: 'listuser.html',
})
export class ListUserPage {
  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public RestProvider: RestUserProvider) {
    this.getListUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getListUsers(){
    this.RestProvider.getListUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  /* Objective: this method will redirect to the Register Page.
  Parameters: it does not receive any parameters.
  Returns: it does not return anything. */

  BtnGoToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
