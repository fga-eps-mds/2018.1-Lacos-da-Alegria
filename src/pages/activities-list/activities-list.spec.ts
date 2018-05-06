import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ActivitiesListPage } from '../activities-list/activities-list'
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

describe('ActivitiesList Page', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesListPage],
      imports: [
        IonicModule.forRoot(ActivitiesListPage)
      ],
      providers: [
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
    expect(component instanceof ActivitiesListPage).toBe(false);
  });

  it('should have two pages', () => {
    expect(component.pages.length).toBe(1);
  });

});