import { Component } from '@angular/core';

import { ListActivityPage } from '../list-activity/list-activity';
import { MenuAppPage } from '../menu-app/menu-app';
import { NewsPage } from '../news/news';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})


export class TabsPage {
  
    role: string = 'novato';
    ProfileRoot = ProfilePage;
    ActivitiesRoot =  ListActivityPage;
    NewsRoot = NewsPage;
    MenuRoot = MenuAppPage;
}
