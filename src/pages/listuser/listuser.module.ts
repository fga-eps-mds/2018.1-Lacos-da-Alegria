import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListUserPage } from './listuser';

@NgModule({
  declarations: [
    ListUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ListUserPage),
  ],
})
export class ListUserPageModule {}