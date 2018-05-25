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
      username: 'renatinhosss',
      name: 'renato vinicius',
      email: 'renatinho@gmail.com',
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

    signUpUser(user);
  });

  afterEach(() => {
    deleteUser(user);
  });
/*
  it('should sign-in', () => {
    fillSigninFields(user);
    clickLoginButton();
  }) */

  it('Login succesful', () =>{

  });
});
