import { ActivityDetailsPage } from '../activity-details/activity-details';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { RestActivityProvider } from '../../providers/rest-activity';
import { AlertController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-activities-list',
  templateUrl: 'activities-list.html'
})

export class ActivitiesListPage {
  activities: any;
  indexes: any;
  user: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public RestProvider: RestActivityProvider, public alerCtrl: AlertController) {
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
  
  postActivityID(index) {
    return this.restProvider.getActivity(index)
    .then(data => {
      this.user.activities = data;
      console.log(this.activities);
    });
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Inscrito na atividade!',
      message: 'Você foi inscrito na atividade. Aguarde ser sorteado para visita',
      buttons: ['Ok']
    });
    alert.present()
  }
}
