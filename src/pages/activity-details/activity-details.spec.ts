
import { async, TestBed, inject } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RestActivityProvider } from '../../providers/rest-activity';

import { ActivityDetailsPage } from './activity-details';

import {
  NavMock,
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('ActivityDetails Page', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityDetailsPage],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(ActivityDetailsPage)
      ],
      providers: [
        { provide: HttpClient, useClass: HttpClient },
        { provide: NavController, useClass: NavMock },
        { provide: NavParams },
        { provide: RestActivityProvider, useClass: RestActivityProvider },
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDetailsPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof ActivityDetailsPage).toBe(true);
  });
});
