import { AlertController, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

import { LocalUser } from '../../models/local-user';
import { RestUserProvider } from '../../providers/rest-user';
import { RoleService } from '../../providers/role.service';
import { StorageService } from '../../providers/storage.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = { username:'', password:''}
  users: any;
  constructor(
    public alertCtrl: AlertController,
    public navController: NavController,  
    public restProvider: RestUserProvider, 
    public roleService: RoleService,
    public storage: StorageService
  ) { }

  register(){
    this.navController.push(RegisterPage);
  }

  userLogin() {
    this.restProvider.authenticate(this.user)
      .subscribe((response: any) => {
        console.log("refresh token response = ",response.body.refresh)
        console.log("access token response = ",response.body.access)

        let localUser: LocalUser = {
          accessToken: response.body.access,
          refreshToken:  response.body.refresh,
          username: this.user.username
        };
        this.restProvider.successfulLogin(localUser);
        this.getUser(this.restProvider.getId());
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

  getUser(id) {
    this.restProvider.getUser(id)
    .then(data => {
      this.users = [data];
      console.log("mensagem: ",this.users);
      console.log("role = ", this.users[0].role);
      this.roleService.setLocalRole(this.users[0].role);
      this.navController.push(TabsPage);
    });
  }
}
