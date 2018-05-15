import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

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
import { RestActivityProvider } from '../providers/rest-activity';

import { HttpClientModule } from '@angular/common/http'
import { RestUserProvider } from '../providers/rest-user';
import { StorageService } from '../providers/storage.service';

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
    IonicStorageModule.forRoot(),
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
    RestActivityProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestUserProvider,
    StorageService,
  ]
})

export class AppModule {}
