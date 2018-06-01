import { Component } from '@angular/core';

import { ListActivityPage } from '../list-activity/list-activity';
import { MenuAppPage } from '../menu-app/menu-app';
import { NewsPage } from '../news/news';
import { ProfilePage } from '../profile/profile';

import { RoleService } from '../../providers/role.service';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})


export class TabsPage {

  role: any;

  constructor(public roleService: RoleService) {
    this.role = roleService.getLocalRole();
    console.log('ROLE SERVICE = ', this.role);    
  }
  
  ProfileRoot = ProfilePage;
  ActivitiesRoot =  ListActivityPage;
  NewsRoot = NewsPage;
  MenuRoot = MenuAppPage;
}
