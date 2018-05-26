import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { goToHelpPage, goToLoginPage, signInUser, clickSignUpButton, signUpUser } from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Help tests', () =>{
    beforeEach(() => {
        user = {
            /* username: 'naruto',
            password:'abc123456', */

            username: 'renatinhosss3',
            name: 'renato vinicius',
            email: 'renatinho3@gmail.com',
            password:'abc123456',
            passwordVerify: 'abc123456',
            cpf: '80374640084',
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
    });
    afterEach(() => {

    });

    it('Help succesful', () =>{
        browser.driver.sleep(500);
        goToHelpPage();
    });
});