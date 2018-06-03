import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestActivityProvider } from '../../providers/rest-activity';

import { ActivitiesListPage } from '../activities-list/activities-list';

@Component({
  selector: 'page-activity-details',
  templateUrl: 'activity-details.html'
})
export class ActivityDetailsPage {
  activity: any;

  constructor(public navCtrl: NavController, public params: NavParams, public restProvider: RestActivityProvider) {
    //let id = this.params.get('id');
    let id = this.params.get('id');    
    this.getHospitalActivity(id);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getHospitalActivity(id) {
    this.restProvider.getHospitalActivity(id)
    .then(data => {
      this.activity = [data];
      console.log(this.activity);
    });
  }

  getNGOActivity(id) {
    this.restProvider.getNGOActivity(id)
    .then(data => {
      this.activity = [data];
      console.log(this.activity);
    });
  }

  BtnBackToList(){
    this.navCtrl.pop();
  }
}
