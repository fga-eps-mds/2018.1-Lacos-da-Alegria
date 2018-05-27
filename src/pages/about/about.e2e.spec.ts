import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { clickAboutButton, clickEntryButton, clickLastSlide, clickLoginButton, clickSettingsButton, fillSigninFields, clickSignUpButton, signUpUser, goToLoginPage, signInUser, goToAboutPage} from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('About tests', () =>{
    // Run before each case test
    beforeEach(() => {

        user = {
            /* username: 'naruto',
            password:'abc123456', */

            username: 'renatinhosss2',
            name: 'renato vinicius',
            email: 'renatinho2@gmail.com',
            password:'abc123456',
            passwordVerify: 'abc123456',
            cpf: '39789378084',
            endereco: 'quadra 14',
            ddd: '61',
            whatsapp: '993675487'
        };

        goToLoginPage()

        browser.driver.sleep(500);
        clickSignUpButton();
        browser.driver.sleep(500);
        signUpUser(user);

        goToLoginPage();
        browser.driver.sleep(500);
        signInUser(user);
        browser.driver.sleep(500);

    });
    afterEach(() => {

    });

    it('About succesful', () =>{
        browser.driver.sleep(500);
        goToAboutPage();
        browser.driver.sleep(500);
    });

});
