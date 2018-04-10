import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  usersLocal: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getProfiles();
  }

  getProfiles() {
    this.restProvider.getProfiles()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  
}
