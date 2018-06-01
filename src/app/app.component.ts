import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { RestUserProvider } from '../providers/rest-user';
import { RoleService } from '../providers/role.service';
import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  constructor(public platform: Platform, public restProvider: RestUserProvider, public roleService: RoleService, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController) {
    this.initializeApp();
  }
  user: any;

  getUser(id) {
    this.restProvider.getUser(id)
    .then(data => {
      this.user = [data];
      console.log("mensagem",this.user);
    });
  }

  initializeApp() {
    this.user = this.getUser(3);
    console.log("mensege",this.user);
    //this.roleService.setLocalRole(this.user.role);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menu.enable(false);
      console.log("Teste123121");
      // if(this.storage.getLocalAccessToken){
      //   this.getUser(this.user.id);
      // }
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
