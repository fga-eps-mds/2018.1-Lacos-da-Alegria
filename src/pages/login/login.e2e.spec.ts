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

    // clickSignUpButton();
    // browser.driver.sleep(500);
    // signUpUser(user);

  });

  afterEach(() => {
    /* deleteUser(user); */
  });

  it('Should sign-in with succesful', () => {
    signInUser(user);

    var titlePage = element(by.xpath('//*[@id="tabpanel-t1-0"]/page-list-activity/ion-header/ion-navbar/div[2]/ion-title/div'));
    expect(titlePage.getAttribute('innerHTML')).toContain('Lista de Atividades');

  });

  it('Should not login with Username containing invalid characteres', () => {
    user.username = 'renatinho@123'
    signInUser(user);

    var errorPopUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    expect(errorPopUp.isPresent());
    expect(errorPopUp.getAttribute('innerHTML')).toContain('Ops!');
  });

  it('Should not login with Username containing less than 5 characteres', () => {
    user.username = 'rena'
    signInUser(user);

    var errorPopUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    expect(errorPopUp.isPresent());
    expect(errorPopUp.getAttribute('innerHTML')).toContain('Ops!');
  });

  it('Should not login with Username containing more than 20 characteres', () => {
    user.username = 'renatinhorenatao12345'
    signInUser(user);

    var errorPopUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    expect(errorPopUp.isPresent());
    expect(errorPopUp.getAttribute('innerHTML')).toContain('Ops!');
  });

  it('Should not login with Password containing invalid characteres', () => {
    user.password = 'renatinho@123'
    signInUser(user);

    var errorPopUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    expect(errorPopUp.isPresent());
    expect(errorPopUp.getAttribute('innerHTML')).toContain('Ops!');
  });

  it('Should not login with Password containing less than 6 characteres', () => {
    user.password = 'renat'
    signInUser(user);

    var errorPopUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    expect(errorPopUp.isPresent());
    expect(errorPopUp.getAttribute('innerHTML')).toContain('Ops!');
  });

  it('Should not login with Password containing more than 32 characteres', () => {
    user.password = 'renatorenatinhorenataoRENATORENATINHORENATAO'
    signInUser(user);

    var errorPopUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    expect(errorPopUp.isPresent());
    expect(errorPopUp.getAttribute('innerHTML')).toContain('Ops!');
  });

  it('Should not login with a existing Username but with wrong Password', () => {
    user.password = 'Abc123456'
    signInUser(user);

    var errorPopUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    expect(errorPopUp.isPresent());
    expect(errorPopUp.getAttribute('innerHTML')).toContain('Ops!');
  });

});
