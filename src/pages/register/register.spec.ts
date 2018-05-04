import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RegisterPage } from './register';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../../providers/rest/rest';


describe('Register', () => {
  let de: DebugElement;
  let comp: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  var user = RegisterPage.user;
  beforeEach(async(() => {
    user = {
      username:'ZecaPagodinho',
      password:'12345abc',
      email:'testeeee@teste.com',
      cpf:'246966600',
      name:'zecapagodinho',
      birth: '2018-04-26',
      region:'cataratas',
      preference:'deus',
      ddd:'11',
      whatsapp:'40028922',
      address:'casa',
      howDidYouKnow:'pericles',
      want_ongs:'True',
      genre: 'M'
    };

    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [
        IonicModule.forRoot(RegisterPage)
      ],
      providers: [
        NavController,
        {
          provide: RestProvider
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

  it('should save user', function() => {
    expect(RegisterPage.saveUser(user)).toBeNull()
  });
});
