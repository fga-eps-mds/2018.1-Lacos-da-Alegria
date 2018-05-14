import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { ListActivityPage } from '../list-activity/list-activity';
import { HelpPage } from '../help/help';


@Component({
  selector: 'page-menuApp',
  templateUrl: 'menuApp.html',
})

export class MenuAppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

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
  }
}
