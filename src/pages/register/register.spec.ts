import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RegisterPage } from './register';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestUserProvider } from '../../providers/rest-user';


describe('Register', () => {
  let de: DebugElement;
  let comp: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [
        IonicModule.forRoot(RegisterPage)
      ],
      providers: [
        NavController,
        {
          provide: RestUserProvider
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

  it('should be created', () => {
    expect(comp instanceof RegisterPage).toBe(true);
  });

});
