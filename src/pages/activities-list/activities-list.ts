import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { RoleService } from '../../providers/role.service';


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
  hospital_activities: any;
  ngo_activities: any;
  aux: any;
  indexes: any;
  user: any;
  token: any;
  role: any;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public restProvider: RestActivityProvider,
    public storage: StorageService,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public roleService: RoleService) {
      this.getHospitalActivitiesList();
      this.getNGOActivitiesList();
      this.role = this.roleService.getLocalRole();
      this.token = storage.getLocalAccessToken();

  }

  openModal(index) {
      let modal = this.modalCtrl.create(ActivityDetailsPage, index);
      modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getHospitalActivitiesList(){
    return this.restProvider.getHospitalActivitiesList()
    .then(data => {
      this.hospital_activities = data;
      console.log(this.aux);
    });
  }

  getNGOActivitiesList(){
    return this.restProvider.getNGOActivitiesList()
    .then(data => {
      this.ngo_activities = data;
      console.log(this.aux);
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
