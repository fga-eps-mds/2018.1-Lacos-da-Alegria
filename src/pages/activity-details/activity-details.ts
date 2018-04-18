import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

import { ActivitiesListPage } from '../activities-list/activities-list';

@Component({
  selector: 'page-activity-details',
  templateUrl: 'activity-details.html'
})
export class ActivityDetailsPage {
  activity: any;

  constructor(public navCtrl: NavController, public restProvider: RestApiProvider) {
    this.getActivity();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getActivity() {
    this.restProvider.getActivity()
    .then(data => {
      this.activity = [data];
      console.log(this.activity);
    });
  }

  BtnBackToList(){
    this.navCtrl.push(ActivitiesListPage);
  }
}
