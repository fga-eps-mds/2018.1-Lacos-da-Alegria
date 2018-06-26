
import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RestActivityProvider } from '../../providers/rest-activity';

import { ActivitiesListPage } from './activities-list';
import {
  NavMock,
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('Activitie List Page', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesListPage],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(ActivitiesListPage)
      ],
      providers: [
        { provide: HttpClient, useClass: HttpClient },
        { provide: NavController, useClass: NavMock },
        { provide: RestActivityProvider, useClass: RestActivityProvider },
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesListPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof ActivitiesListPage).toBe(true);
  });
});