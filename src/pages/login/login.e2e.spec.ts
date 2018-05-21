import { browser, element, by } from 'protractor';

var user;

describe('Login tests', () =>{
  // Run before each case test
  beforeEach(() => {
    browser.get('');
    element(by.xpath('//*[@data-slide-index="3"]')).click();
    browser.driver.sleep(500);
    element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-welcome/ion-content/div[2]/ion-slides/div/div[1]/ion-slide[4]/div/div/button')).click();

    

    browser.driver.sleep(500);
  });

  it('Login succesful', () =>{
    browser.driver.sleep(500);
  });
});
