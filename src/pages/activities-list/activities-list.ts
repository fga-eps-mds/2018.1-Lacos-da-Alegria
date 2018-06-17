import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { RoleService } from '../../providers/role.service';
import { RestActivityProvider } from '../../providers/rest-activity';

import { ActivityDetailsPage } from '../activity-details/activity-details';
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
  role: any;
  id: any;
  resposta: string;
  // array[number, string];
  array = new Array(10);
  contador = 0;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public restProvider: RestActivityProvider,
    public restUserProvider: RestUserProvider,
    public roleService: RoleService) {
      this.refresh();
      this.getHospitalActivitiesList();
      this.getNGOActivitiesList();
      this.role = this.roleService.getLocalRole();
      console.log('iiid = ', this.id);
      // this.restUserProvider.getUserActivitiesIds(2);
      
  }
  
  refresh(){
    this.id = this.restUserProvider.getId();
    this.array = new Array(10);
      this.restUserProvider.getUserActivitiesIds(this.id).subscribe((data: any)=>{
        console.log('data = ', data);
        for (let index = 0; index < data.aux.length; index++) {
          console.log('data.aux index = ', data.aux[index]);
          //data.aux[index] = id of activity
          //this.id = id of user
          this.restUserProvider.searchPosition(this.id, data.aux[index]).subscribe((resp: any)=>{
            console.log('resp = ', resp); 
            this.array[index] = [data.aux[index],resp.resp];
          }, (error)=>{
            console.log('error = ', error);
          })
          
        }
      }, (err) =>{
        console.log('erro = ', err);
      })
      this.getHospitalActivitiesList();
      this.getNGOActivitiesList();
      this.role = this.roleService.getLocalRole();
      console.log('iiid = ', this.id);
      // this.restUserProvider.getUserActivitiesIds(2);
  }

  getResp(id){
    // console.log('id no get = ', id.id)
    for (let index = 0; index < this.array.length; index++) {
      if(this.array[index] && id.id == this.array[index][0]){
        this.resposta = this.array[index][1];
        return true;
      }
    }
    return false;
  }

  openModal(index) {
      let modal = this.modalCtrl.create(ActivityDetailsPage, index);
      console.log('index = ',index);
      modal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getHospitalActivitiesList(){
    return this.restProvider.getHospitalActivitiesList()
    .then(data => {
      this.hospital_activities = data;
    });
  }

  getNGOActivitiesList(){
    return this.restProvider.getNGOActivitiesList()
    .then(data => {
      this.ngo_activities = data;
    });
  }

}
