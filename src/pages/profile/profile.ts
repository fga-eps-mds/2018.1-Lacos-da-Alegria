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
    this.getUser(3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  showBirth(data){
    data = data.substr(8,2) + '/' + data.substr(5,2) + '/' + data.substr(0,4);

    return data;
  }

  showCpf(data){
    data = (data.substr(0,3) + '.' + data.substr(3,3) + '.' +
    data.substr(6,3) + '-' + data.substr(9,2));

    return data;
  }
  getUser(id) {
    this.RestProvider.getUser(id)
    .then(data => {
      this.user = [data];
      console.log(this.user);
    });
  }
}
