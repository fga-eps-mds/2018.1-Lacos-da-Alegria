import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { clickAboutButton, clickEntryButton, clickLastSlide, clickLoginButton, clickSettingsButton, fillSigninFields, clickSignUpButton, signUpUser, goToLoginPage, signInUser, goToAboutPage, clickNewsButton, clickProfileButton, clickMenuButton} from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Activity list tests', () =>{
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

    });
    afterEach(() => {

    });

    it('Should go to activity list', () => {
        var ActivityListButton = element(by.xpath('//*[@id="tab-t1-0"]'));
        ActivityListButton.click();
        browser.driver.sleep(500);
        var titlePage = element(by.xpath('//*[@id="tabpanel-t1-0"]/page-list-activity/ion-header/ion-navbar/div[2]/ion-title/div'));
        expect(titlePage.getAttribute('innerHTML')).toContain('Lista de Atividades');
    });

});