import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ActivityDetailsPage } from '../pages/activity-details/activity-details';
import { ActivitiesListPage } from '../pages/activities-list/activities-list';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListUserPage } from '../pages/listuser/listuser';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Lista', component: ListPage },
      { title: 'Bem-Vindo', component: WelcomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Registro', component: RegisterPage },
      { title: 'Listar Usuários', component: ListUserPage },
      { title: 'Lista de Atividades', component: ActivitiesListPage },
      { title: 'Detalhes da Atividade', component: ActivityDetailsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {    
    this.nav.setRoot(page.component);
  }
}
