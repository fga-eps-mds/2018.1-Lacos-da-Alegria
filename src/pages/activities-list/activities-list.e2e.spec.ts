import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
import { goToHelpPage, goToLoginPage, signInUser, clickSignUpButton, signUpUser, goToActivityDetailsPage,
          clickMenuButton, clickActivityDetailsButton, goToActivityList } from '../../acceptanceTestFunctions/testFunctions';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Activity List tests', () =>{
    beforeEach(() => {
        user = {

            username: 'baguncinha',
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

        signInUser(user);
        browser.driver.sleep(500);
        goToActivityList();
        browser.driver.sleep(500);

    });

    afterEach(() => {
    });

    it('Should  enroll in an Activity', () => {
        var titlePage = element(by.id('activityTitle'));
        expect(titlePage.getAttribute('innerHTML')).toContain('Atividades da Semana');
        var clickEnrollButton = element(by.id('participateId'));
        clickEnrollButton.click();
        browser.driver.sleep(500);
        var popUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
        expect(popUp.isPresent());
        var popUpText = element(by.xpath('//*[@id="alert-subhdr-0"]'));
        expect<any>(popUpText.getText()).toEqual('Você entrou na pré-lista, aguarde o resultado do sorteio.');
    });
});
