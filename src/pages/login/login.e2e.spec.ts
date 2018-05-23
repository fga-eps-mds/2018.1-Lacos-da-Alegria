import { browser, element, by } from 'protractor';
import { fillSignupFields, clickLastSlide, clickEntryButton, clickSignUpButton, clickNextButton, clickNextButton_2, clickDateFieldButton, fillSignupFields_2, clickGenreFieldButton, fillSignupFields_3 , clickRegisterButton} from './loginFunctions';

var user;

describe('Login tests', () =>{
  // Run before each case test
  beforeEach(() => {

    user = {
      username: 'renatinho',
      name: 'renato vinicius',
      email: 'renatinho@gmail.com',
      password:'abc123456',
      passwordVerify: 'abc123456',
      cpf: '05730259166',
      endereco: 'quadra 14',
      ddd: '061',
      whatsapp: '993675487'
    };

    browser.get('');

    browser.driver.sleep(500);
    clickLastSlide();
    browser.driver.sleep(500);
    clickEntryButton();
    browser.driver.sleep(500);
    clickSignUpButton();
    browser.driver.sleep(500);
    fillSignupFields(user);
    browser.driver.sleep(500);
    clickNextButton();
    browser.driver.sleep(500);
    fillSignupFields_2(user);
    browser.driver.sleep(500);
    clickDateFieldButton();
    browser.driver.sleep(500);
    clickGenreFieldButton();
    browser.driver.sleep(500);
    clickNextButton_2();
    browser.driver.sleep(500);
    fillSignupFields_3();
    browser.driver.sleep(500);
    clickRegisterButton();
    browser.driver.sleep(500);


  });

  it('Login succesful', () =>{
    browser.driver.sleep(500);
  });
});
