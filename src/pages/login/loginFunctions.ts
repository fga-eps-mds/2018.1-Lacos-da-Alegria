import { browser, element, by, Browser } from 'protractor';

/* var chai = require('chai');
var chaiHttp = require('chai-http'); */
var server = 'http://localhost:3000';

export function fillSignupFields(user){
    //get and fill signup fields
    var usernameField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/ion-item[1]/div[1]/div/ion-input/input'));
    usernameField.sendKeys(user.username);
    
    var nameField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/ion-item[2]/div[1]/div/ion-input/input'));
    nameField.sendKeys(user.name);

    var emailField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/ion-item[3]/div[1]/div/ion-input/input'));
    emailField.sendKeys(user.email);

    var passwordField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/ion-item[4]/div[1]/div/ion-input/input'));
    passwordField.sendKeys(user.password);

    var passwordVerifyField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/ion-item[5]/div[1]/div/ion-input/input'));
    passwordVerifyField.sendKeys(user.passwordVerify);

/*     var cpfField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[2]/div/ion-list/ion-item[1]/div[1]/div/ion-input/input'));
    cpfField.sendKeys(user.cpf);

    var enderecoField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[2]/div/ion-list/ion-item[2]/div[1]/div/ion-input/input'));
    enderecoField.sendKeys(user.endereco);

    var dddField = element.all(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[2]/div/ion-list/ion-item[4]/div[1]/div/ion-input/input'));
    dddField.sendKeys(user.ddd);

    var whatsappField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/div/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/ion-item[4]/div[1]/div/ion-input/input'));
    whatsappField.sendKeys(user.whatsapp); */


}

export function clickLastSlide(){
    browser.driver.sleep(500);
    var buttonLastSlide = element(by.xpath('//*[@data-slide-index="3"]'));
    buttonLastSlide.click();
    browser.driver.sleep(500);    
}

export function clickEntryButton(){
    browser.driver.sleep(500);
    var buttonEntry = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-welcome/ion-content/div[2]/ion-slides/div/div[1]/ion-slide[4]/div/div/button'))
    buttonEntry.click();
    browser.driver.sleep(500);
}

export function clickSignUpButton(){
    browser.driver.sleep(500);
    var buttonSignUp = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-login/ion-content/div[2]/div[2]/button/span'));
    buttonSignUp.click();
    browser.driver.sleep(500);
}
  
export function clickNextButton(){
    browser.driver.sleep(500);
    var buttonNextStep = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/div/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/div/button'));
    buttonNextStep.click();
    browser.driver.sleep(500);
}
