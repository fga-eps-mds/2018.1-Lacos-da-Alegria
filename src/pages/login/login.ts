import { AlertController, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { RestUserProvider } from '../../providers/rest-user';
import { StorageService } from '../../providers/storage.service';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import * as jwt_decode from "jwt-decode";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = { username:'', password:''}
  constructor(
    public alertCtrl: AlertController,
    public navController: NavController,
    public restProvider: RestUserProvider,
    public storage: StorageService
  ) { }

  register(){
    this.navController.push(RegisterPage);
  }

  userLogin() {
    this.restProvider.authenticate(this.user)
      .subscribe(response => {
        let refreshToken = response.body.substr(11,209);
        let accessToken = response.body.substr(230,207);
        let username = this.user.username;
        let tokenInfo = this.getDecodedAccessToken(accessToken);
        let id = tokenInfo.user_id; // get token expiration dateTime
        console.log(tokenInfo); // show decoded token object in console
        console.log('iddd',id);
        console.log('refreeeeesh',refreshToken);
        console.log('acessoooooooo',accessToken);
        console.log('response',response);

        this.storage.setLocalUser(username, accessToken, refreshToken);
        this.navController.push(TabsPage);
      },
      error => {
        let alert = this.alertCtrl.create({
          title: 'Ops!',
          subTitle: 'Nome de usuário ou senha incorretos!'+
          ' Por favor, verifique seus dados e tente novamente.',
          buttons: ['OK']
        });
        alert.present();
      });

  }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  // validUser(){
  //     let acess = this.storage.getLocalAccessToken();
  //     let token_info = this.getDecodedAccessToken(acess);
  //     let id = tokenInfo.user_id;
  //
  // }

  //console.log('idddddddddd',this.storage.getLocalUserId());


}
