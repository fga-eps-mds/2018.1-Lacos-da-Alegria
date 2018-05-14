import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ProfilePage } from './profile';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

describe('Profile', () => {
  let de: DebugElement;
  let comp: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePage],
      imports: [
        IonicModule.forRoot(ProfilePage)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePage);
    comp = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(comp instanceof ProfilePage).toBe(true);
  });
});
