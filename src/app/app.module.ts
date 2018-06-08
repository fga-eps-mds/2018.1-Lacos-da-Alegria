import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RestActivityProvider } from '../providers/rest-activity';
import { RestUserProvider } from '../providers/rest-user';
import { StorageService } from '../providers/storage.service';
import { RoleService } from '../providers/role.service';

import { AboutPage } from '../pages/about/about';
import { ActivitiesListPage } from '../pages/activities-list/activities-list';
import { ActivityDetailsPage } from '../pages/activity-details/activity-details';
import { HelpPage } from '../pages/help/help';
import { ListActivityPage } from '../pages/list-activity/list-activity';
import { ListUserPage } from '../pages/listuser/listuser';
import { LoginPage } from '../pages/login/login';
import { MenuAppPage } from '../pages/menu-app/menu-app';
import { NewsPage } from '../pages/news/news';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';



@NgModule({
  declarations: [
    AboutPage,
    ActivitiesListPage,
    ActivityDetailsPage,
    HelpPage,
    ListActivityPage,
    ListUserPage,
    LoginPage,
    MenuAppPage,
    MyApp,
    NewsPage,
    ProfilePage,
    RegisterPage,
    SettingsPage,
    TabsPage,
    WelcomePage
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom',tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot(),
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    AboutPage,
    ActivitiesListPage,
    ActivityDetailsPage,
    HelpPage,
    ListActivityPage,
    ListUserPage,
    LoginPage,
    MenuAppPage,
    MyApp,
    NewsPage,
    ProfilePage,
    RegisterPage,
    SettingsPage,
    TabsPage,
    WelcomePage
  ],

  providers: [
    RestActivityProvider,
    RestUserProvider,
    SplashScreen,
    StatusBar,
    StorageService,
    RoleService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})

export class AppModule {}
