import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { RestActivityProvider } from '../../providers/rest-activity';

import { ActivityDetailsPage } from '../activity-details/activity-details';

@Component({
  selector: 'page-activities-list',
  templateUrl: 'activities-list.html'
})

export class ActivitiesListPage {
  hospital_activities: any;
  ngo_activities: any;
  aux: any;
  indexes: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public RestProvider: RestActivityProvider) {
    this.getHospitalActivitiesList();
    this.getNGOActivitiesList();
  }

  openModal(index) {
      let modal = this.modalCtrl.create(ActivityDetailsPage, index);
      modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getHospitalActivitiesList(){
    return this.RestProvider.getHospitalActivitiesList()
    .then(data => {
      this.hospital_activities = data;
      console.log(this.aux);
    });
  }

  getNGOActivitiesList(){
    return this.RestProvider.getNGOActivitiesList()
    .then(data => {
      this.ngo_activities = data;
      console.log(this.aux);
    });
  }

}
