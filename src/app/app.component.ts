import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { RestUserProvider } from '../providers/rest-user';
import { RoleService } from '../providers/role.service';

import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { StorageService } from '../providers/storage.service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  constructor(
    public menu: MenuController,
    public platform: Platform,
    public restProvider: RestUserProvider,
    public roleService: RoleService,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public storage: StorageService
  ) {

    this.initializeApp();
  }
  user: any;

  getUser(id) {

    this.restProvider.getUser(id)
    .then(data => {
      this.user = [data];
      this.roleService.setLocalRole(this.user[0].role);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menu.enable(false);
      let refreshToken = {
        'refresh': ''
      }

      let localUser = this.storage.getLocalUser();
      if(localUser){
        refreshToken.refresh = localUser.refreshToken
      }
      if(refreshToken.refresh != ''){
        this.restProvider.refreshToken(refreshToken).subscribe((data)=>{
          let id = this.restProvider.getId();
          this.user = this.getUser(id);
          this.rootPage = TabsPage;
        }, (err)=>{
          console.log('erro no refresh = ',err);
        })
      }
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
