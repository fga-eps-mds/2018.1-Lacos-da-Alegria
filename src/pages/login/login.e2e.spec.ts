import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { clickLastSlide, clickEntryButton, clickSignUpButton, signUpUser, goToLoginPage,
         signInUser, fillSigninFields, clickLoginButton, deleteUser} from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Login tests', () =>{
  // Run before each case test
  beforeEach(() => {

    user = {
      username: 'renatinhosz1',
      name: 'renato vinicius',
      email: 'renatinhosz1@gmail.com',
      password:'abc123456',
      passwordVerify: 'abc123456',
      cpf: '09233118070',
      address: 'quadra 14',
      ddd: '61',
      whatsapp: '993675487'
    };

    goToLoginPage()

    browser.driver.sleep(500);
    clickSignUpButton();
    browser.driver.sleep(500);
    signUpUser(user);
    browser.driver.sleep(500);
    /* goToLoginPage(); */
  });

  afterEach(() => {
    /* deleteUser(user); */
  });

  it('should sign-in', () => {
    //goToLoginPage();
    browser.driver.sleep(500);
    signInUser(user);
    browser.driver.sleep(500);

  });

/*   it('Login succesful', () =>{

  }); */
/*   it('Username field is invalid', () => {
    var usernameField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-login/ion-content/div[2]/form/ion-list/div[1]/ion-item[1]/div[1]/div/ion-input/input'));
    usernameField.sendKeys('test');

    var passwordField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-login/ion-content/div[2]/form/ion-list/div[1]/ion-item[2]/div[1]/div/ion-input/input'));
    passwordField.sendKeys(user.password);
    var buttonSubmitSignIn = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-login/ion-content/div[2]/form/ion-list/div[2]/button'));
    buttonSubmitSignIn.click();
    expect(element(by.css('alert-head'))
    .getAttribute('innerHTML'))
    .toContain('alert-head');
  }); */



});
