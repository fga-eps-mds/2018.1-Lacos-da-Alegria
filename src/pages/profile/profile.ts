import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestUserProvider } from '../../providers/rest-user';

@Component({
  selector: 'profile-home',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	user: any;

	constructor(public navCtrl: NavController, public params: NavParams, public RestProvider: RestUserProvider) {
    let id = this.params.get('id');
    this.getUser(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getUser(id) {
    this.RestProvider.getUser(id)
    .then(data => {
      this.user = [data];
      console.log(this.user);
    });
  }
}
