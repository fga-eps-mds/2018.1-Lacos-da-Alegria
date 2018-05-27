import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { goToHelpPage, goToLoginPage, signInUser, clickSignUpButton, signUpUser, goToActivityDetailsPage } from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Activity details tests', () =>{
    beforeEach(() => {
        user = {
            /* username: 'naruto',
            password:'abc123456', */

            username: 'renatinhosss4',
            name: 'renato vinicius',
            email: 'renatinho4@gmail.com',
            password:'abc123456',
            passwordVerify: 'abc123456',
            cpf: '37921976000',
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
    it('Activity detail sucess', () => {
        browser.driver.sleep(500);
        goToActivityDetailsPage();
        browser.driver.sleep(500);

    });

});