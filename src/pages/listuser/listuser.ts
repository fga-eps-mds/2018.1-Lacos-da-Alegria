import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
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

}
