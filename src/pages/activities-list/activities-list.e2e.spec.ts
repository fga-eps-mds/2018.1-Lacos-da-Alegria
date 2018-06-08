import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { goToLoginPage, signInUser, clickSignUpButton, signUpUser, goToActivityListPage} from '../../acceptanceTestFunctions/testFunctions';

describe('Activities Lists tests', () =>{
    beforeEach(() => {
        user = {

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
        goToActivityListPage();
    });

    afterEach(() => {
      // shoud delete user
    });

    it('Should sign up for activity', () =>{
        var joinButton = element(by.id('join-btnId'));
        joinButton.click();
        browser.driver.sleep(500);
        // var successPopUp = element(by.xpath(''))
        // expect(titlePage.getAttribute('innerHTML')).toContain('');
        // browser.driver.sleep(500);
    });

});
