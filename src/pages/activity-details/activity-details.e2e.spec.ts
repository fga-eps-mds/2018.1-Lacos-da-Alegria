import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { goToHelpPage, goToLoginPage, signInUser, clickSignUpButton, signUpUser, goToActivityDetailsPage,
          clickMenuButton, clickActivityDetailsButton } from '../../acceptanceTestFunctions/testFunctions';

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
            address: 'quadra 14',
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
        clickActivityDetailsButton();
    });

    afterEach(() => {
      // should delete user
    });

    it('Should go to test Activity details', () => {
        var titlePage = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-tabs/ion-tabs/page-list-activity/ion-header/ion-navbar/div[2]/ion-title/div'));
        expect(titlePage.getAttribute('innerHTML')).toContain('Lista de Atividades');
    });

    it('Should go back to Menu', () => {
        var buttonBack = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-tabs/ion-tabs/page-list-activity/ion-header/ion-navbar/button'));

        buttonBack.click();
        var listActivitiesButton = element(by.xpath('//*[starts-with(@class, "list-activities-btn")]'));
        expect(listActivitiesButton.isPresent()).toBeTruthy();
    });
});
