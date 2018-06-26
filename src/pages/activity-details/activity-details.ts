import { AlertController, ModalController, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { RestActivityProvider } from '../../providers/rest-activity';
import { RestUserProvider } from '../../providers/rest-user';


@Component({
  selector: 'page-activity-details',
  templateUrl: 'activity-details.html'
})
export class ActivityDetailsPage {
  activity: any;
  buttonDisabled: any;
  btnText: any;
  btnColor: any;
  month: any;
  day: any;
  time: any;
  schedule: any;
  nome: any;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public params: NavParams,
    public restActivityProvider: RestActivityProvider,
    public restUserProvider: RestUserProvider,
    ) {
    let id = this.params.get('id');
    this.nome = this.params.get('nome');
    this.btnColor = "#ff5300"
    this.btnText = "Participar"

    if(this.nome == 'hosp'){
      this.getHospitalActivity(id);
      this.restUserProvider.getUserActivitiesIds(this.restUserProvider.getId()).subscribe((data: any)=>{
        for (let index = 0; index < data.aux.length; index++) {
          if (id == data.aux[index]){
            this.btnText = "Cancelar"
            this.btnColor = "red"
          }
        }
      }
      , (error)=>{
        console.log('error = ', error);
      })
    }
    else{
      this.getNGOActivity(id);
      this.restUserProvider.getUserNgosIds(this.restUserProvider.getId()).subscribe((data: any)=>{
        for (let i = 0; i < data.aux.length; i++) {
          if (id == data.aux[i]){
            this.btnText = "Cancelar"
            this.btnColor = "red"
          }
        }
      }
      , (error)=>{
        console.log('error = ', error);
      })
    }
  }

  getId(){
    return this.restUserProvider.getId();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  getHospitalActivity(id) {
    this.restActivityProvider.getHospitalActivity(id)
    .then(data => {
      this.activity = [data];
      this.schedule = this.activity[0].schedule;
      this.month = this.schedule.substring(5, 7);
      this.day = this.schedule.substring(8, 10);
      this.time = this.schedule.substring(11, 16);
      console.log('aquiii',this.activity[0].schedule);
    });
  }

  getNGOActivity(id) {
    this.restActivityProvider.getNGOActivity(id)
    .then(data => {
      this.activity = [data];
      this.schedule = this.activity[0].schedule
      this.month = this.schedule.substr(5, 2)
      this.day = this.schedule.substr(8, 2)
      this.time = this.schedule.substr(11, 5)
      console.log(this.activity);
    });
  }

  BtnBackToList(){
    this.navCtrl.pop();
  }

  postActivity(id_user, id_activity){
    let alerta: any;
    console.log('id user = ',id_user, ' id activ = ',id_activity)
    if(this.nome == 'hosp') {
      if(this.btnText == "Participar") {
        this.restActivityProvider.postActivity(id_user,id_activity).then((resolve) => {
          console.log("resolve = ", resolve);
          alerta = 'Você entrou na pré-lista, aguarde o resultado do sorteio.';
          let alert1 = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: alerta,
            buttons: ['OK']
          });
          this.btnText = "Cancelar"
          this.btnColor = "red"
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

      } else {
        this.restActivityProvider.cancelActivity(id_user,id_activity).then((resolve) => {
          console.log("resolve = ", resolve);
          alerta = 'Atividade cancelada.';
          let alert3 = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: alerta,
            buttons: ['OK']
          });
          this.btnColor = "#ff5300"
          this.btnText = "Participar"
          alert3.present();

        }, (error) => {
          console.log("error = ", error.error.status);
          alerta = error.error.status;
          let alert4 = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: alerta,
            buttons: ['OK']
          });
          alert4.present();
        })
      }
    }
    else {
      if(this.btnText=="Participar") {
        this.restActivityProvider.postNgo(id_user,id_activity).then((resolve) => {
          console.log("resolve = ", resolve);
          alerta = 'Você entrou na pré-lista, aguarde o resultado do sorteio.';
          let alert1 = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: alerta,
            buttons: ['OK']
          });
          this.btnText = "Cancelar"
          this.btnColor = "red"
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

      } else {
        this.restActivityProvider.cancelNgo(id_user,id_activity).then((resolve) => {
          console.log("resolve = ", resolve);
          alerta = 'Atividade cancelada.';
          let alert3 = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: alerta,
            buttons: ['OK']
          });
          this.btnColor = "#ff5300"
          this.btnText = "Participar"
          alert3.present();

        }, (error) => {
          console.log("error = ", error.error.status);
          alerta = error.error.status;
          let alert4 = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: alerta,
            buttons: ['OK']
          });
          alert4.present();
        })
      }
    }
  }
}
