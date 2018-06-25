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
  buttonDisabled: any;
  array = new Array(10);
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

      console.log('iiid = ', this.id);
      
  }
  
  refresh(){
    this.id = this.restUserProvider.getId();
    this.array = new Array(10);
      this.restUserProvider.getUserActivitiesIds(this.id).subscribe((data: any)=>{
        console.log('data = ', data);
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
      console.log('iiid = ', this.id);
  }

  getResp(id){
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
