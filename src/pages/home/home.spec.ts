import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomePage } from './home';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

describe('Home', () => {
  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

// it('should create component', () => expect(comp).toBeDefined());

//   it('should have expected <h3> text', () => {
//     fixture.detectChanges();
//     const h3 = de.nativeElement;
//     expect(h3.innerText).toMatch(/ionic/i,
//       '<h3> should say something about "Ionic"');
//   });

//   it('should show the favicon as <img>', () => {
//     fixture.detectChanges();
//     const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
//     expect(img.src).toContain('assets/icon/favicon.ico');
//   });
});