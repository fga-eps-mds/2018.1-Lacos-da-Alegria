import { Component } from '@angular/core';

import { RoleService } from '../../providers/role.service';

import { AlertController, ModalController, NavController } from 'ionic-angular';
import { ActivityDetailsPage } from '../activity-details/activity-details';
import { RestActivityProvider } from '../../providers/rest-activity';
import { RestUserProvider } from '../../providers/rest-user';

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
  role: any;

  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public restActivityProvider: RestActivityProvider,
    public restUserProvider: RestUserProvider,
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
    return this.restActivityProvider.getHospitalActivitiesList()
    .then(data => {
      this.hospital_activities = data;
      console.log(this.aux);
    });
  }

  getNGOActivitiesList(){
    return this.restActivityProvider.getNGOActivitiesList()
    .then(data => {
      this.ngo_activities = data;
      console.log(this.aux);
    });
  }

  getDecodedAccessToken(){
    return this.restUserProvider.getId();
  }

  postActivity(id_user, id_activity){
    let alerta: any;
    this.restUserProvider.postActivity(id_user,id_activity).then((resolve) => {
      console.log("resolve = ", resolve);
      alerta = 'Você entrou na pré-lista, aguarde o resultado do sorteio.';
      let alert1 = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: alerta,
        buttons: ['OK']
      });
      alert1.present();
    }, (error) => {
      console.log("error = ", error.error.status);
      alerta = error.error.status;
      let alert2 = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: alerta,
        buttons: ['OK']
      });
      alert2.present();
    })

  }
}
