import { ActivityDetailsPage } from '../activity-details/activity-details';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { RestActivityProvider } from '../../providers/rest-activity';

@Component({
  selector: 'page-activities-list',
  templateUrl: 'activities-list.html'
})

export class ActivitiesListPage {
  activities: any;
  indexes: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public RestProvider: RestActivityProvider) {
    this.getActivitiesList();
  }

  openModal(index) {
      let modal = this.modalCtrl.create(ActivityDetailsPage, index);
      modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getActivitiesList(){
    return this.RestProvider.getActivitiesList()
    .then(data => {
      this.activities = data;
      console.log(this.activities);
    });
  }
}
