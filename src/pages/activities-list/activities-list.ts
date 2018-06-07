import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public restActivityProvider: RestActivityProvider, public restUserProvider: RestUserProvider, public alertCtrl: AlertController, public storage: StorageService, public http: HttpClient ) {
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


  getDecodedAccessToken(token: string): any{
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  postActivity(id_user, id_activity){
     return new Promise((resolve, reject) => {
        this.http.get('http://localhost:8000/api'+'/profile/'+id_user+'/relate_with_activity/?activity_key='+id_activity).subscribe(data => {
            resolve(data);
        }, (err) => {
           let alerta: string;
           alerta = err.error.status;
           console.log(alerta);
           let alert = this.alertCtrl.create({
            title: 'Inscrito na atividade!',
            message: alerta,
            buttons: ['Ok']
       });
       alert.present();
     });
    });
  }
}
