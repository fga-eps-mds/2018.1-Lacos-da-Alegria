import { browser, element, by, ExpectedConditions, Ptor, Browser } from 'protractor';
import { goToHelpPage, goToLoginPage, signInUser, clickSignUpButton, signUpUser, goToActivityDetailsPage, clickMenuButton, clickActivityDetailsButton} from '../../acceptanceTestFunctions/testFunctions';

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
    });

    afterEach(() => {

    });

    it('Should go to menu page', () => {
        clickMenuButton();

        var listActivitiesButton = element(by.xpath('//*[starts-with(@class, "list-activities-btn")]'));
        expect(listActivitiesButton.isPresent()).toBeTruthy();

        var helpButton = element(by.xpath('//*[starts-with(@class, "help-btn")]'));
        expect(helpButton.isPresent()).toBeTruthy();

        var aboutButton = element(by.xpath('//*[starts-with(@class, "about-btn")]'));
        expect(aboutButton.isPresent()).toBeTruthy();

        var settingsButton = element(by.xpath('//*[starts-with(@class, "settings-btn")]'));
        expect(settingsButton.isPresent()).toBeTruthy();

        var exitButton = element(by.xpath('//*[starts-with(@class, "exit-btn")]'));
        expect(exitButton.isPresent()).toBeTruthy();
    });
});
