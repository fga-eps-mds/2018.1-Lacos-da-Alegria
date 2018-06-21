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

        // clickSignUpButton();
        // browser.driver.sleep(500);
        // signUpUser(user);

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

    // it('Should  do not enroll in two activities', () => {
    //     var clickEnrollButton = element(by.id('participateId'));
    //     clickEnrollButton.click();
    //     browser.driver.sleep(500);
    //     var popUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    //     expect(popUp.isPresent());
    //     var popUpText = element(by.xpath('//*[@id="alert-subhdr-0"]'));
    //     expect<any>(popUpText.getText()).toEqual('Conflito de horário com outra atividade que você está participando!');
    // });
    //
    // it('Should  do not enroll on days not allowed', () => {
    //     var clickEnrollButton = element(by.id('participateId'));
    //     clickEnrollButton.click();
    //     browser.driver.sleep(500);
    //     var popUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    //     expect(popUp.isPresent());
    //     var popUpText = element(by.xpath('//*[@id="alert-subhdr-0"]'));
    //     expect<any>(popUpText.getText()).toEqual('Você pode entrar na pré-lista apenas na segunda ou terça-feira.');
    // });
    //
    // it('Should  do not register missing 2 hours or less before activity', () => {
    //     var clickEnrollButton = element(by.id('participateId'));
    //     clickEnrollButton.click();
    //     browser.driver.sleep(500);
    //     var popUp = element(by.xpath('//*[@id="alert-hdr-0"]'));
    //     expect(popUp.isPresent());
    //     var popUpText = element(by.xpath('//*[@id="alert-subhdr-0"]'));
    //     expect<any>(popUpText.getText()).toEqual('Você não pode entrar na pré-lista faltando 2hs ou menos para o início da atividade.');
    // });
});
