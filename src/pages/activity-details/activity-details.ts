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

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public params: NavParams,
    public restActivityProvider: RestActivityProvider,
    public restUserProvider: RestUserProvider,
    ) {
    let id = this.params.get('id');
    let nome = this.params.get('nome');
    this.btnText = "Participar"
    this.restUserProvider.getUserActivitiesIds(this.restUserProvider.getId()).subscribe((data: any)=>{
      for (let index = 0; index < data.aux.length; index++) {
        if (id == data.aux[index]){
          this.btnText = "Cancelar"
        }
      }
    }
    , (error)=>{
      console.log('error = ', error);
    })
    
    if(nome == 'hosp'){
      this.getHospitalActivity(id);
    }
    else{
      this.getNGOActivity(id);
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
      console.log('aquiii',this.activity);
    });
  }

  getNGOActivity(id) {
    this.restActivityProvider.getNGOActivity(id)
    .then(data => {
      this.activity = [data];
      console.log(this.activity);
    });
  }

  /* Objective: this method will make the return to last page.
  Parameters: it does not receive any parameters.
  Returns: it does not return anything. */

  BtnBackToList(){
    this.navCtrl.pop();
  }

  /* Objective: this method will make the subscription to an activity.
  Parameters: it receives an user-id and an activity-id.
  Returns: it does not return anything. */

  postActivity(id_user, id_activity){
    let alerta: any;
    console.log('id user = ',id_user, ' id activ = ',id_activity)
    if (this.btnText == "Participar") {
      this.restActivityProvider.postActivity(id_user,id_activity).then((resolve) => {
        console.log("resolve = ", resolve);
        alerta = 'Você entrou na pré-lista, aguarde o resultado do sorteio.';
        let alert1 = this.alertCtrl.create({
          title: 'Atenção!',
          subTitle: alerta,
          buttons: ['OK']
        });
        this.btnText = "Cancelar"
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
