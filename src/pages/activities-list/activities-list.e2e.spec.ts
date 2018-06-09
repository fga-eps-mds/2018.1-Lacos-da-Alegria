import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { goToLoginPage, signInUser, clickSignUpButton, clickMenuButton, signUpUser, goToActivityListPage} from '../../acceptanceTestFunctions/testFunctions';


var user;

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
        browser.driver.sleep(500);
        goToActivityListPage();
    });

    afterEach(() => {
      // shoud delete user
    });

    it('Should sign up for activity', () =>{
        var joinButton = element(by.xpath('//*[@id="tabpanel-t1-0"]/page-activities-list/ion-content/div[2]/div[2]/ion-list/ion-card[1]/div/ion-row/ion-col/button'));
        joinButton.click();
        browser.driver.sleep(500);
        var alertMsg = element(by.xpath('//*[@id="alert-msg-0"]'));
        expect<any>(alertMsg.getText()).toEqual('Você entrou na pré-lista, aguarde o resultado do sorteio.');
    });

});
