import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { RoleService } from '../../providers/role.service';
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
  role: any;

  constructor(
    public modalCtrl: ModalController, 
    public navCtrl: NavController, 
    public restProvider: RestActivityProvider,
    public roleService: RoleService) {
      this.getHospitalActivitiesList();
      this.getNGOActivitiesList();
      this.role = this.roleService.getLocalRole();
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

}
