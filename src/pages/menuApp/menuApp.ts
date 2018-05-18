import { App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { ListActivityPage } from '../list-activity/list-activity';
import { LoginPage } from '../login/login';
import { HelpPage } from '../help/help';
import { RestUserProvider } from '../../providers/rest-user';
import { StorageService } from '../../providers/storage.service';

@Component({
  selector: 'page-menuApp',
  templateUrl: 'menuApp.html',
})

export class MenuAppPage {

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public restProvider: RestUserProvider,
    public storage: StorageService
  ){ }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  listActivitiesBtn() {
    this.navCtrl.push(ListActivityPage)
  }
  
  helpBtn() {
    this.navCtrl.push(HelpPage)
  }

  aboutBtn() {
    this.navCtrl.push(AboutPage)
  }

  settingsBtn() {
    this.navCtrl.push(SettingsPage)
  }

  signOutBtn() {
    let confirm = this.alertCtrl.create({
      title: 'Sair',
      message: 'Deseja realmente encerrar a sessão?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',      
          handler: () => {
            console.log('Before logout: ', this.storage.getLocalAccessToken());
            this.storage.clearLocalUser();            
            console.log('After logout: ', this.storage.getLocalAccessToken());
            // this.app.getRootNav().setRoot(LoginPage);
            // console.log(this.navCtrl.getActiveChildNavs());
            // this.navCtrl.popToRoot();
            console.log(this.app.getActiveNavContainers());
            this.navCtrl.setRoot(LoginPage);

            // this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    confirm.present();
    // this.restProvider.userLogout();
  }
}
