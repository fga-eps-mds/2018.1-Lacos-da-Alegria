import { browser, element, by, ExpectedConditions, Ptor, Browser } from 'protractor';
import { goToHelpPage, goToLoginPage, signInUser, clickSignUpButton, signUpUser, goToActivityDetailsPage, goToMenuPage } from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Menu tests', () =>{
    beforeEach(() => {
        user = {
            /* username: 'naruto',
            password:'abc123456', */

            username: 'renatinhosss5',
            name: 'renato vinicius',
            email: 'renatinho5@gmail.com',
            password:'abc123456',
            passwordVerify: 'abc123456',
            cpf: '15680423022',
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

    it('Menu sucess', () => {
        browser.driver.sleep(500);
        goToMenuPage();
        browser.driver.sleep(500);
    });
});