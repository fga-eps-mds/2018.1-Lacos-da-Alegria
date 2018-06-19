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

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public params: NavParams,
    public restActivityProvider: RestActivityProvider,
    public restUserProvider: RestUserProvider,
    ) {
    let id = this.params.get('id');
    let nome = this.params.get('nome');
    
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

  BtnBackToList(){
    this.navCtrl.pop();
  }

  postActivity(id_user, id_activity){
    let alerta: any;
    console.log('id user = ',id_user, ' id activ = ',id_activity)
    this.restActivityProvider.postActivity(id_user,id_activity).then((resolve) => {
      console.log("resolve = ", resolve);
      alerta = 'Você entrou na pré-lista, aguarde o resultado do sorteio.';
      let alert1 = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: alerta,
        buttons: ['OK']
      });
      alert1.present();

      this.buttonDisabled = true;
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
