import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { ActivitiesListPage } from '../pages/activities-list/activities-list';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage} from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListUserPage } from '../pages/listuser/listuser';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AboutPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Bem-Vindo', component: WelcomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Registro', component: RegisterPage },
      { title: 'Lista de Atividades', component: ActivitiesListPage },
      { title: 'Perfil', component: ProfilePage },
      { title: 'Sobre', component: AboutPage },
      { title: 'Configurações', component: SettingsPage }
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
