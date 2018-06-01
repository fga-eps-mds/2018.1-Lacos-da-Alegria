import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { RestActivityProvider } from '../../providers/rest-activity';

import { ActivityDetailsPage } from '../activity-details/activity-details';

@Component({
  selector: 'page-activities-list',
  templateUrl: 'activities-list.html'
})

export class ActivitiesListPage {
  activities: any;
  indexes: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public RestProvider: RestActivityProvider, public localNotifications: LocalNotifications) {
    this.getActivitiesList();
  }

  openModal(index) {
    this.localNotifications.schedule({ 
      text: 'Você se inscreveu em uma atividade',
      trigger: {at: new Date(new Date().getTime() + 60)},
      led: 'FF0000',
      sound: null
    });
    
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
