import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RestUserProvider } from '../../providers/rest-user';
import { StorageService } from '../../providers/storage.service';
import { RefreshToken } from '../../models/refresh-token'
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  constructor(private navController: NavController, public restProvider: RestUserProvider, public storage: StorageService) {
  }
  BtnLogin(){
    // let data = this.storage.getLocalRefreshToken();
    // console.log ('data = ', data);
    // let token: RefreshToken = {
    //   refresh: data
    // };
    // console.log('token = ', token);
    // this.restProvider.refreshToken(token)
    //   .subscribe(response => {
    //     console.log('response = ', response);
    //     this.navController.push(LoginPage);
    //   },
    //   error => {
    //     console.log(error);
    //   });
    this.navController.push(LoginPage);
  }
}
