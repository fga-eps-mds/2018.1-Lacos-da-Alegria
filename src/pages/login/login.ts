import { Component } from '@angular/core';
import { LocalUser } from '../../models/local-user';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = { username:'', password:''}
  constructor(public navController: NavController,  public restProvider: RestProvider) {

  }
  BtnRegister(){
    this.navController.push(RegisterPage);
  }

  // userLogin(){
  //   this.restProvider.userLogin(this.user).then((result) => {
  //     console.log(result);
  //     // let header = result;
  //     // console.log(header);
  //     this.navController.push(HomePage);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  userLogin() {
    this.restProvider.authenticate(this.user)
      .subscribe(response => {
        //this.restProvider.successfulLogin(response.headers.get('Authorization'));
        console.log(response.body);
        let data: LocalUser = {
          refreshToken:'',
          accessToken:'',
          username:'',
        };
        data.refreshToken = response.body.substr(11,209);
        data.accessToken = response.body.substr(230,207);
        console.log('refreeeeesh',data.refreshToken);
        console.log('acessoooooooo', data.accessToken);
        console.log('response',response);
        this.navController.push(HomePage);
      },
      error => {
        console.log(error);
      });
  }
}
