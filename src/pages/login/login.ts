import { Component } from '@angular/core';
import { LocalUser } from '../../models/local-user';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { StorageService } from '../../providers/storage.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = { username:'', password:''}
  constructor(public navController: NavController,  public restProvider: RestProvider, public storage: StorageService) {

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
        // console.log(response.body);
        // let data: LocalUser  = {
        //   refreshToken:'',
        //   accessToken:'',
        //   username:'',
        // };
        let refreshToken = response.body.substr(11,209);
        let accessToken = response.body.substr(230,207);
        let username = this.user.username;
        console.log('refreeeeesh',refreshToken);
        console.log('acessoooooooo',accessToken);
        console.log('response',response);
        this.storage.setLocalUser(username, accessToken, refreshToken);
        // this.storage.setLocalUser(null);
        // let data2 = this.storage.getLocalUser();
        // console.log('data2 = ', data2);
        this.navController.push(HomePage);
        
      },
      error => {
        console.log(error);
      });
  }

}
