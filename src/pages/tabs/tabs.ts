import { Component } from '@angular/core';

import { ActivitiesListPage } from '../activities-list/activities-list';
import { MenuAppPage } from '../menu-app/menu-app';
import { NewsPage } from '../news/news';
import { ProfilePage } from '../profile/profile';

import { RoleService } from '../../providers/role.service';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})


export class TabsPage {

  // role: any;

  // constructor(public roleService: RoleService) {
  //   this.role = roleService.getLocalRole();
  //   console.log('ROLE SERVICE = ', this.role);    
  // }
  
  ProfileRoot = ProfilePage;
  ActivitiesRoot =  ActivitiesListPage;
  NewsRoot = NewsPage;
  MenuRoot = MenuAppPage;
}
