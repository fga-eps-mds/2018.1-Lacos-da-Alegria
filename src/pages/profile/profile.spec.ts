import { async, TestBed, inject } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RestUserProvider } from '../../providers/rest-user';

import { ProfilePage } from './profile';

import {
  NavMock,
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('Profile Page', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePage],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(ProfilePage)
      ],
      providers: [
        { provide: HttpClient, useClass: HttpClient },
        { provide: NavController, useClass: NavMock },
        { provide: NavParams },
        { provide: RestUserProvider, useClass: RestUserProvider },
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof ProfilePage).toBe(true);
  });
});
