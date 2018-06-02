import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { RestUserProvider } from '../providers/rest-user';
import { RoleService } from '../providers/role.service';

import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';

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
      console.log("mensagem: ",this.user);
      console.log("role = ", this.user[0].role);
      this.roleService.setLocalRole(this.user[0].role);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menu.enable(false);
      let id = this.restProvider.getId();
      console.log('id = ', id);
      if(id){
        this.rootPage = TabsPage;
        this.user = this.getUser(id);
      }
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
