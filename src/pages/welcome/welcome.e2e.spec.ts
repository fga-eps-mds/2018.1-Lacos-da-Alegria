import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';

var user;
var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

describe('Settings tests', () =>{
    // Run before each case test
    beforeEach(() => {

        browser.get('');
        var clickFirstSlide = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-welcome/ion-content/div[2]/ion-slides/div/div[2]/button[1]'));
        clickFirstSlide.click();
        browser.driver.sleep(500);
        var clickSecondSlide = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-welcome/ion-content/div[2]/ion-slides/div/div[2]/button[2]'));
        clickSecondSlide.click();
        browser.driver.sleep(500);
        var clickThirdSlide = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-welcome/ion-content/div[2]/ion-slides/div/div[2]/button[3]'));
        clickThirdSlide.click();
        browser.driver.sleep(500);
        var clickFourthSlide = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-welcome/ion-content/div[2]/ion-slides/div/div[2]/button[4]'));
        clickFourthSlide.click();

    });
    afterEach(() => {

    });

    it('should click in slides', () =>{
        var clickEntryButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-welcome/ion-content/div[2]/ion-slides/div/div[1]/ion-slide[4]/div/div/button'));
        expect(clickEntryButton.isPresent()).toBeTruthy();
    });

});