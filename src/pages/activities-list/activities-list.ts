import { Component } from '@angular/core';

import { RoleService } from '../../providers/role.service';

import { AlertController, ModalController, NavController } from 'ionic-angular';
import { ActivityDetailsPage } from '../activity-details/activity-details';
import { RestActivityProvider } from '../../providers/rest-activity';
import { RestUserProvider } from '../../providers/rest-user';
import { StorageService } from '../../providers/storage.service';

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
  id: any;
  resposta: string;
  respostaNgo: string;
  buttonDisabled: any;
  array = new Array(10);
  arrayNgo = new Array(10);
  contador = 0;

  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public restActivityProvider: RestActivityProvider,
    public restUserProvider: RestUserProvider,
    public storage: StorageService,    
    public roleService: RoleService) {
      this.refresh();
      this.getHospitalActivitiesList();
      this.getNGOActivitiesList();
      this.role = this.roleService.getLocalRole();
  }
  /*Objective: this method will refresh the activities-list on screen.
    Parameters: it does not receive any parameters.
    Returns: it does not return anything. */
       
  refresh(){
    this.id = this.restUserProvider.getId();
    this.array = new Array(10);
      this.restUserProvider.getUserActivitiesIds(this.id).subscribe((data: any)=>{
        for (let index = 0; index < data.aux.length; index++) {
          console.log('data.aux index = ', data.aux[index]);
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
      this.refreshNgo();
      console.log('iiid = ', this.id);
  }

  refreshNgo(){
    this.id = this.restUserProvider.getId();
    this.arrayNgo = new Array(5);
      this.restUserProvider.getUserNgosIds(this.id).subscribe((data: any)=>{
        for (let i = 0; i < data.aux.length; i++) {
          this.restUserProvider.searchPositionNgo(this.id, data.aux[i]).subscribe((resp: any)=>{
            this.arrayNgo[i] = [data.aux[i],resp.resp];
          }, (error)=>{
            console.log('error = ', error);
          })
          
        }
      }, (err) =>{
        console.log('erro = ', err);
      })
  }

  /*Objective: this method will verify the existance of a value in a list.
    Parameters: it receives an ID.
    Returns: it returns a boolean. */

  getResp(id){
    for (let index = 0; index < this.array.length; index++) {
      if(this.array[index] && id.id == this.array[index][0]){
        this.resposta = this.array[index][1];
        return true;
      }
    }
    return false;
  }

  getRespNgo(id){
    for (let i = 0; i < this.arrayNgo.length; i++) {
      if(this.arrayNgo[i] && id.id == this.arrayNgo[i][0]){
        this.respostaNgo = this.arrayNgo[i][1];
        return true;
      }
    }
    return false;
  }

  /*Objective: generate new page based on the activity
    Parameters: index of the activity */

  openModal(index) {
    let modal = this.modalCtrl.create(ActivityDetailsPage, index);
    modal.present();
  }

  getHospitalActivitiesList(){
    return this.restActivityProvider.getHospitalActivitiesList()
    .then(data => {
      this.hospital_activities = data;
    });
  }

  getNGOActivitiesList(){
    return this.restActivityProvider.getNGOActivitiesList()
    .then(data => {
      this.ngo_activities = data;
    });
  }
  
}
