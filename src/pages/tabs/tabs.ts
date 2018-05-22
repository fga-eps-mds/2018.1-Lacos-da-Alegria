import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import {  ListActivityPage } from '../list-activity/list-activity';
import { NewsPage } from '../news/news';
import { MenuAppPage } from '../menuApp/menuApp';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
    ProfileRoot = ProfilePage;
    ActivitiesRoot =  ListActivityPage;
    NewsRoot = NewsPage;
    MenuRoot = MenuAppPage;
}