import { browser, element, by, ExpectedConditions, Key, Ptor } from 'protractor';
import { clickLastSlide, clickEntryButton, clickSignUpButton, signUpUser, goToLoginPage,
         fillPageOneSignupFields, fillPageTwoSignupFields, fillPageThreeSignupFields, signInUser, fillSigninFields, clickLoginButton, deleteUser} from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Register tests with succesful', () =>{
  // Run before each case test
  beforeEach(() => {

    user = {
      username: 'renatinhos2',
      name: 'renato vinicius',
      email: 'renatinhos2@gmail.com',
      password:'abc123456',
      passwordVerify: 'abc123456',
      cpf: '01944567062',
      address: 'quadra 14',
      ddd: '61',
      whatsapp: '993675487'
    };

    goToLoginPage()
    browser.driver.sleep(500);

    clickSignUpButton();
    browser.driver.sleep(500);

  });

  afterEach(() => {
    /* deleteUser(user); */
  });

  it ("Should SignUp with succesful", () => {
    signUpUser(user);

    var buttonLogin = element(by.xpath('//*[starts-with(@class, "login-btn")]'));
    expect(buttonLogin.isDisplayed()).toBeTruthy;
  });
});

describe('Page one Register tests', () =>{
  // Run before each case test
  beforeEach(() => {

    user = {
      username: 'renatinhos2',
      name: 'renato vinicius',
      email: 'renatinhos2@gmail.com',
      password:'abc123456',
      passwordVerify: 'abc123456',
      cpf: '01944567062',
      address: 'quadra 14',
      ddd: '61',
      whatsapp: '993675487'
    };

    goToLoginPage()
    browser.driver.sleep(500);

    clickSignUpButton();
    browser.driver.sleep(500);

  });

  afterEach(() => {
    /* deleteUser(user); */
  });

  it ("Should not go to second page with username containing invalid characteres", () => {
    user.username = 'renatinho@rnt';
    fillPageOneSignupFields(user);

    var errorUsername = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span'));
    expect(errorUsername.isPresent()).toBeTruthy();
    expect(errorUsername.getAttribute('innerHTML')).toContain('Nome de usuário inválido!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with username containing less than 5 characteres", () => {
    user.username = 'rena';
    fillPageOneSignupFields(user);

    var errorUsername = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span'));
    expect(errorUsername.isPresent()).toBeTruthy();
    expect(errorUsername.getAttribute('innerHTML')).toContain('Nome de usuário inválido!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with username containing more than 20 characteres", () => {
    user.username = 'renatoRenatinhorenato';
    fillPageOneSignupFields(user);

    var errorUsername = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span'));
    expect(errorUsername.isPresent()).toBeTruthy();
    expect(errorUsername.getAttribute('innerHTML')).toContain('Nome de usuário inválido!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with blank username", () => {
    user.username = '';
    fillPageOneSignupFields(user);

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with password containing invalid characteres", () => {
    user.password = '123@12345';
    fillPageOneSignupFields(user);

    var errorPassword = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span'));
    expect(errorPassword.isPresent()).toBeTruthy();
    expect(errorPassword.getAttribute('innerHTML')).toContain('Senha inválida!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with password containing less than 6 characteres", () => {
    user.password = '12345';
    fillPageOneSignupFields(user);

    var errorPassword = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span'));
    expect(errorPassword.isPresent()).toBeTruthy();
    expect(errorPassword.getAttribute('innerHTML')).toContain('Senha inválida!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with password containing more than 32 characteres", () => {
    user.password = 'renatorenatinhorenataoRENATORENAT';
    fillPageOneSignupFields(user);

    var errorPassword = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span'));
    expect(errorPassword.isPresent()).toBeTruthy();
    expect(errorPassword.getAttribute('innerHTML')).toContain('Senha inválida!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with blank password", () => {
    user.password = '';
    fillPageOneSignupFields(user);

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });


  it ("Should not go to second page with blank verify password", () => {
    user.passwordVerify = '';
    fillPageOneSignupFields(user);

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with passaword and verify password that does not match", () => {
    user.passwordVerify = 'Abc123456';
    fillPageOneSignupFields(user);
    element(by.css('body')).sendKeys(Key.TAB);

    var errorPassword = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span'));
    expect(errorPassword.isPresent()).toBeTruthy();
    expect(errorPassword.getAttribute('innerHTML')).toContain('As senhas não coincidem!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with blank name", () => {
    user.name = '';
    fillPageOneSignupFields(user);

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with name containing invalid characteres", () => {
    user.name = 'Renato@Silva';
    fillPageOneSignupFields(user);

    var errorName = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span[1]'));
    expect(errorName.isPresent()).toBeTruthy();
    expect(errorName.getAttribute('innerHTML')).toContain('Nome inválido!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with name containing less than 3 characteres", () => {
    user.name = 'Re';
    fillPageOneSignupFields(user);

    var errorName = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span[1]'));
    expect(errorName.isPresent()).toBeTruthy();
    expect(errorName.getAttribute('innerHTML')).toContain('Nome inválido!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with name containing more than 50 characteres", () => {
    user.name = 'Renato Silva Costa Moreira de Souza Soares e Freita';
    fillPageOneSignupFields(user);

    var errorName = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span[1]'));
    expect(errorName.isPresent()).toBeTruthy();
    expect(errorName.getAttribute('innerHTML')).toContain('Nome inválido!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with blank email", () => {
    user.email = '';
    fillPageOneSignupFields(user);

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });

  it ("Should not go to second page with email in wrong format", () => {
    user.email = 'renato@renato';
    fillPageOneSignupFields(user);

    var emailError = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/span[1]'));

    expect(emailError.isPresent()).toBeTruthy();
    expect(emailError.getAttribute('innerHTML')).toContain('Email inválido!');

    var buttonNextStepPageOne = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));
    expect(buttonNextStepPageOne.isEnabled()).toBeFalsy();
  });
});
