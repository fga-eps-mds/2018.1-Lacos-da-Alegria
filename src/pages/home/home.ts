import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestUserProvider } from '../../providers/rest-user';
import { LoginPage } from '../login/login';
import { StorageService } from '../../providers/storage.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;

  constructor(
    public navCtrl: NavController, 
    public restProvider: RestUserProvider,
    ) {
  }

  userLogout(){
    this.restProvider.userLogout();
    console.log('EOQ' );
    this.navCtrl.push(LoginPage);
  }

}
