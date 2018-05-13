import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LoginPage } from './login';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { RestProvider } from '../../providers/rest/rest';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageService } from '../../providers/storage.service';

describe('Login', () => {
  let de: DebugElement;
  let comp: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(LoginPage)
      ],
      providers: [
        RestProvider,
        NavController,
        HttpClient,
        HttpHandler,
        StorageService
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    comp = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(comp instanceof LoginPage).toBe(true);
  });
});
