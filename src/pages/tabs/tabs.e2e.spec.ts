import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { clickAboutButton, clickEntryButton, clickLastSlide, clickLoginButton, clickSettingsButton, fillSigninFields, clickSignUpButton, signUpUser, goToLoginPage, signInUser, goToAboutPage, clickNewsButton, clickProfileButton, clickMenuButton} from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Tabs tests', () =>{
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
        browser.driver.sleep(500);

    });
    afterEach(() => {

    });

    it('Should go to tab activities list', () => {
        var ActivityListButton = element(by.xpath('//*[@id="tab-t1-0"]'));
        ActivityListButton.click();
        browser.driver.sleep(500);
        var titlePage = element(by.xpath('//*[@id="tabpanel-t1-0"]/page-list-activity/ion-header/ion-navbar/div[2]/ion-title/div'));
        expect(titlePage.getAttribute('innerHTML')).toContain('Lista de Atividades');
    });

    it('Should go to tab news', () => {
        clickNewsButton();
        var titlePage = element(by.xpath('//page-news/ion-header/ion-navbar/div[2]/ion-title/div'));
        expect(titlePage.getAttribute('innerHTML')).toContain('Notícias');
    });

    it('Should go to tab profile', () => {
        clickProfileButton();
        var titlePage = element(by.xpath('//profile-home/ion-header/ion-navbar/div[2]/ion-title/div'));
        expect(titlePage.getAttribute('innerHTML')).toContain('Perfil');
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