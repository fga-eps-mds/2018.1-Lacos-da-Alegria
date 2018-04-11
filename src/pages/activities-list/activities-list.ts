import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-activities-list',
  templateUrl: 'activities-list.html'
})
export class ActivitiesListPage {
  activities: any;

  constructor(public navCtrl: NavController, public restApiProvider: RestApiProvider) {
    this.getActivities();
  }

  getActivities() {
    this.restApiProvider.getActivities()
    .then(data => {
      this.activities = data;
      console.log(this.activities);
    });
  }
}
