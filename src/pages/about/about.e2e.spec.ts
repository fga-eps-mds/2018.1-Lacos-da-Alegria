import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { clickAboutButton, clickEntryButton, clickLastSlide, clickLoginButton, clickSettingsButton, fillSigninFields} from '../../functions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('About tests', () =>{
    // Run before each case test
    beforeEach(() => {

        user = {
        username: 'lucianosz7',
        password:'123456789',
        };
        browser.get('');

        browser.driver.sleep(500);
        clickLastSlide();
        browser.driver.sleep(500);
        clickEntryButton();
        browser.driver.sleep(500);
        fillSigninFields(user);
        browser.driver.sleep(500);
        clickLoginButton();
        browser.driver.sleep(500);
        clickSettingsButton();
        browser.driver.sleep(500);
        clickAboutButton();
        browser.driver.sleep(500);
});

    it('About succesful', () =>{

    });

});
