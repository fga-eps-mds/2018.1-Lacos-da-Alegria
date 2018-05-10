import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-listuser',
  templateUrl: 'listuser.html',
})
export class ListUserPage {
  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getListUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getListUsers(){
    this.restProvider.getListUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  BtnGoToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
