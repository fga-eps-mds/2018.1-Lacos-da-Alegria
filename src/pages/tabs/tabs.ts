import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { ActivitiesListPage } from '../activities-list/activities-list';
import { NewsPage } from '../news/news';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
    ProfileRoot = ProfilePage;
    ActivitiesRoot = ActivitiesListPage;
    NewsRoot = NewsPage;
}
