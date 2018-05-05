import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestUserProvider } from '../../providers/rest-user';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the ListUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listuser',
  templateUrl: 'listuser.html',
})
export class ListUserPage {
  // user = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' }};
  // user = { name: '', address: '', email: '', password: ''};
  users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public RestUserProvider: RestUserProvider) {
    this.getListUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getListUsers(){
    this.RestUserProvider.getListUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  BtnGoToRegister(){
    this.navCtrl.push(RegisterPage);
  } 

}
