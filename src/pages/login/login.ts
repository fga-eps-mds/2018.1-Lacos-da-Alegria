import { AlertController, NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Component } from '@angular/core';

import { RegisterPage } from '../register/register';
import { RestUserProvider } from '../../providers/rest-user';
import { RoleService } from '../../providers/role.service';
import { StorageService } from '../../providers/storage.service';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = { username:'', password:''}
  users: any;
  constructor(
    public alertCtrl: AlertController,
    public events: Events,
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
      .subscribe(response => {
        let refreshToken = response.body.substr(11,209);
        let accessToken = response.body.substr(230,207);
        let username = this.user.username;
        console.log('refreeeeesh',refreshToken);
        console.log('acessoooooooo',accessToken);
        console.log('response',response);
        this.restProvider.successfulLogin(username,accessToken,refreshToken);
        this.getUser(this.restProvider.getId());
        this.events.subscribe('Next Page',()=>{
          this.navController.push(TabsPage);
        })

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
      this.events.publish('Next Page');
    });
  }
