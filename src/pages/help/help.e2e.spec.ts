import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { goToHelpPage, goToLoginPage, signInUser, clickSignUpButton, signUpUser, clickMenuButton } from '../../acceptanceTestFunctions/testFunctions';

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

        // clickSignUpButton();
        // browser.driver.sleep(500);
        // signUpUser(user);

        signInUser(user);
        clickMenuButton();
        goToHelpPage();
    });

    afterEach(() => {
      // shoud delete user
    });

    it('Should go to Help page', () =>{
        var titlePage = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-tabs/ion-tabs/page-help/ion-header/ion-navbar/div[2]/ion-title/div'))
        expect(titlePage.getAttribute('innerHTML')).toContain('Ajuda');
    });

    it('Should go back to Menu', () => {
        var buttonBack = element(by.xpath('//*[starts-with(@class, "tabs")]/page-help/ion-header/ion-navbar/button'));

        browser.driver.sleep(500);
        buttonBack.click();
        var helpButton = element(by.xpath('//*[starts-with(@class, "help-btn")]'));
        expect(helpButton.isPresent()).toBeTruthy();
    });
});
