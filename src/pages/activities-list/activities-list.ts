import { Component } from '@angular/core';

import { AlertController, ModalController, NavController } from 'ionic-angular';
import { ActivityDetailsPage } from '../activity-details/activity-details';
import { RestActivityProvider } from '../../providers/rest-activity';
import { RestUserProvider } from '../../providers/rest-user';
import { StorageService } from '../../providers/storage.service';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'page-activities-list',
  templateUrl: 'activities-list.html'
})

export class ActivitiesListPage {
  activities: any;
  indexes: any;
  user: any;
  token: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public restActivityProvider: RestActivityProvider, public restUserProvider: RestUserProvider, public alerCtrl: AlertController, public storage: StorageService ) {
    this.getActivitiesList();
    this.token = storage.getLocalAccessToken();
  }

  openModal(index) {
      let modal = this.modalCtrl.create(ActivityDetailsPage, index);
      modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getActivitiesList(){
    return this.restActivityProvider.getActivitiesList()
    .then(data => {
      this.activities = data;
      console.log(this.activities);
    });
  }

  doAlert(index) {
    if(index != null){
      let alert = this.alerCtrl.create({
        title: 'Inscrito na atividade!',
        message: 'Você foi inscrito na atividade. Aguarde ser sorteado para visita',
        buttons: ['Ok']
      });
      alert.present()
    }
  }

  getDecodedAccessToken(token: string): any{
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  postActivity(id_user: any, id_activity: any){
    this.restUserProvider.postActivity(id_user, id_activity).
    subscribe(response => {
        console.log('response', response);
    });
  }

  //BtnBackToList(){
  //  this.navCtrl.push(ActivitiesListPage);
  //}

}
