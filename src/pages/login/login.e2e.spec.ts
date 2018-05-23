import { browser, element, by } from 'protractor';
import { fillSignupFields, clickLastSlide, clickEntryButton, clickSignUpButton, clickNextButton } from './loginFunctions';

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
      cpf: '03298745611',
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

    
    
   
    

    browser.driver.sleep(500);
  });

  it('Login succesful', () =>{
    browser.driver.sleep(500);
  });
});
