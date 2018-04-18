import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { ActivitiesListPage } from '../pages/activities-list/activities-list';
import { CreateActivityPage } from '../pages/create-activity/create-activity';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
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
      { title: 'Lista', component: ListPage },
      { title: 'Bem-Vindo', component: WelcomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Registro', component: RegisterPage },
      { title: 'Lista de Atividades', component: ActivitiesListPage },
      { title: 'Criar Atividades', component: CreateActivityPage },
      { title: 'Perfil', component: ProfilePage },
      { title: 'Sobre', component: AboutPage },
      { title: 'Configurações', component: SettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
