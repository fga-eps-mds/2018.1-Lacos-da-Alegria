import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ActivitiesListPage } from '../activities-list/activities-list';
import { WelcomePage } from '../welcome/welcome';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
    setRoot = WelcomePage;
    ProfilePage = ProfilePage;
    ActivitiesListPage = ActivitiesListPage;

}
