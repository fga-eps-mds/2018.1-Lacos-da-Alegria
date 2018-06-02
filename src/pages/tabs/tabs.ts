import { Component } from '@angular/core';

import { ActivitiesListPage } from '../activities-list/activities-list';
import { MenuAppPage } from '../menu-app/menu-app';
import { NewsPage } from '../news/news';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
    ProfileRoot = ProfilePage;
    ActivitiesRoot =  ActivitiesListPage;
    NewsRoot = NewsPage;
    MenuRoot = MenuAppPage;
}
