import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { ActivityDetailsPage } from '../pages/activity-details/activity-details';
import { ActivitiesListPage } from '../pages/activities-list/activities-list';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListUserPage } from '../pages/listuser/listuser'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiProvider } from '../providers/rest-api/rest-api';

import { HttpClientModule } from '@angular/common/http'
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ListUserPage,
    ActivitiesListPage,
    ActivityDetailsPage,
    ProfilePage,
    AboutPage,
    SettingsPage,
    ListUserPage
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    ListUserPage,
    ActivitiesListPage,
    ActivityDetailsPage,
    ProfilePage,
    AboutPage,
    SettingsPage,
    ListUserPage
  ],

  providers: [
    StatusBar,
    RestApiProvider,
    SplashScreen,
    RestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
