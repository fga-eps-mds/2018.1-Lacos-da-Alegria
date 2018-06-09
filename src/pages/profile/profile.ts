import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestUserProvider } from '../../providers/rest-user';

import { LoginPage } from '../login/login';
import { StorageService } from '../../providers/storage.service';

@Component({
  selector: 'profile-home',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	user: any;
  id: any;

	constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public params: NavParams,
    public restProvider: RestUserProvider,
    public storage: StorageService) {
      this.id = this.restProvider.getId();
      this.getUser(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListUserPage');
  }

  showBirth(data){
    data = data.substr(8,2) + '/' + data.substr(5,2) + '/' + data.substr(0,4);

    return data;
  }

  showCpf(data){
    data = (data.substr(0,3) + '.' + data.substr(3,3) + '.' +
    data.substr(6,3) + '-' + data.substr(9,2));

    return data;
  }

  getUser(id) {
    this.restProvider.getUser(id)
    .then(data => {
      this.user = [data];
      console.log(this.user);
    });
  }

  confirmDelete() {
    const prompt = this.alertCtrl.create({
      title: 'Deseja realmente excluir a conta?',
      message: "Após a conta ser excluída, não poderá ser recuperada.",
      inputs: [
        {
          name: 'password',
          placeholder: 'Senha',
          type:'password'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            console.log('Saved clicked');
            console.log("Senha  = ", data);
            this.restProvider.deleteUser(this.id, data)
              .then(response => {
                console.log(response);
                this.navCtrl.push(LoginPage);
              }, error => {
                console.log(error.error);

                const alert = this.alertCtrl.create({
                  title: 'Não foi possível excluir a conta',
                  subTitle: 'As senhas não coincidem',
                  buttons: ['OK']
                });
                alert.present();
              })
          }
        }
      ]
    });
    prompt.present();
  }
}
