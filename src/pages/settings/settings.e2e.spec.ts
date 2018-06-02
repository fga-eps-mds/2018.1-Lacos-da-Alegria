import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { clickAboutButton, clickEntryButton, clickLastSlide, clickLoginButton, clickSettingsButton, fillSigninFields, clickSignUpButton, signUpUser, goToLoginPage, signInUser, goToAboutPage, clickNewsButton, clickProfileButton, clickMenuButton} from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Settings tests', () =>{
    // Run before each case test
    beforeEach(() => {

        user = {
            /* username: 'naruto',
            password:'abc123456', */

            username: 'naruto',
            name: 'renato vinicius',
            email: 'renatinho3@gmail.com',
            password:'abc123456',
            passwordVerify: 'abc123456',
            cpf: '39789378084',
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
        clickSettingsButton();
        browser.driver.sleep(500);

    });
    afterEach(() => {

    });

    it('Should go to settings', () => {
        var titlePage = element(by.xpath('//html/body/ion-app/ng-component/ion-nav/page-tabs/ion-tabs/page-settings/ion-header/ion-navbar/div[2]/ion-title/div'));
        expect(titlePage.getAttribute('innerHTML')).toContain('Configurações');
    });

    it('Should click enable notifications', () => {
        var enableNotificationsButton = element(by.xpath('//*[@id="toggle-3-0"]'));
        enableNotificationsButton.click();
        expect(enableNotificationsButton.isPresent()).toBeTruthy();
    });

    it('Should go back to Menu', () => {
       
        var buttonBack = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-tabs/ion-tabs/page-settings/ion-header/ion-navbar/button'));

        buttonBack.click();
        browser.driver.sleep(500);
        var settingsButton = element(by.xpath('//*[@id="tabpanel-t1-3"]/page-menu-app/ion-content/div[2]/button[4]/span'));
        expect(settingsButton.isPresent()).toBeTruthy();
    });
});