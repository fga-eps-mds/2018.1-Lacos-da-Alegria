import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(private navController: NavController, private menu: MenuController) {

  }
  BtnLogin(){
    this.navController.push(LoginPage);
  }
  
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  
}
