import { browser, element, by} from 'protractor';


export function fillSignupFields(user){
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

}

export function fillSignupFields_2(user){
    var cpfField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[2]/div/ion-list/ion-item[1]/div[1]/div/ion-input/input'));
    cpfField.sendKeys(user.cpf);
    var enderecoField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[2]/div/ion-list/ion-item[2]/div[1]/div/ion-input/input'));
    enderecoField.sendKeys(user.endereco);
    browser.driver.sleep(500);
    clickDateFieldButton();
    browser.driver.sleep(500);
    var dddField = element.all(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[2]/div/ion-list/ion-item[4]/div[1]/div/ion-input/input'));
    dddField.sendKeys(user.ddd);
    var whatsappField = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[2]/div/ion-list/ion-item[5]/div[1]/div/ion-input/input'));
    whatsappField.sendKeys(user.whatsapp);
}

export function fillSignupFields_3(){
    var cityFieldButton = element(by.xpath('//*[@id="select-14-0"]/span'));
    cityFieldButton.click();
    browser.driver.sleep(500);
    var selectCityButton = element(by.xpath('//*[@id="alert-input-1-27"]/span/div[2]'));
    selectCityButton.click();
    browser.driver.sleep(500);
    var cityDoneButton = element(by.xpath('/html/body/ion-app/ion-alert/div/div[4]/button[2]/span'));
    cityDoneButton.click();
    browser.driver.sleep(500);
    var hospitalVisitButton = element(by.xpath('//*[@id="select-15-0"]/span'));
    hospitalVisitButton.click();
    browser.driver.sleep(500);
    var selectHospitalVisitButton = element(by.xpath('//*[@id="alert-input-2-2"]/span'));
    selectHospitalVisitButton.click();
    browser.driver.sleep(500);
    var hospitalVisitDoneButton = element(by.xpath('/html/body/ion-app/ion-alert/div/div[4]/button[2]/span'));
    hospitalVisitDoneButton.click();
    browser.driver.sleep(500);
    var howDidYouMeetButton = element(by.xpath('//*[@id="select-16-0"]/span'));
    howDidYouMeetButton.click();
    browser.driver.sleep(500);
    var selectHowDidYouMeetButton = element(by.xpath('//*[@id="alert-input-3-3"]/span'));
    selectHowDidYouMeetButton.click();
    browser.driver.sleep(500);
    var howDidYouMeetDoneButton = element(by.xpath('/html/body/ion-app/ion-alert/div/div[4]/button[2]/span'));
    howDidYouMeetDoneButton.click();
    browser.driver.sleep(500);
    var wantToVisitCharitiesButton = element(by.xpath('//*[@id="select-17-0"]/span'));
    wantToVisitCharitiesButton.click();
    browser.driver.sleep(500);
    var selectWantToVisitCharitiesButton = element(by.xpath('//*[@id="alert-input-4-0"]'));
    selectWantToVisitCharitiesButton.click();
    browser.driver.sleep(500);
    var wantToVisitCharitiesDoneButton = element(by.xpath('/html/body/ion-app/ion-alert/div/div[4]/button[2]/span'));
    wantToVisitCharitiesDoneButton.click();
}

export function clickLastSlide(){
    browser.driver.sleep(500);
    var buttonLastSlide = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-welcome/ion-content/div[2]/ion-slides/div/div[2]/button[4]'));
    buttonLastSlide.click();   
}

export function clickEntryButton(){
    browser.driver.sleep(500);
    var buttonEntry = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-welcome/ion-content/div[2]/ion-slides/div/div[1]/ion-slide[4]/div/div/button'))
    buttonEntry.click();
}

export function clickSignUpButton(){
    browser.driver.sleep(500);
    var buttonSignUp = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-login/ion-content/div[2]/div[2]/button/span'));
    buttonSignUp.click();
}
  
export function clickNextButton(){
    browser.driver.sleep(500);
    var buttonNextStep = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button[2]/span'));
    buttonNextStep.click();
}

export function clickNextButton_2(){
    browser.driver.sleep(500);
    var buttonNextStep = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[2]/div/ion-list/button[2]/span'));
    buttonNextStep.click();
}

export function clickDateFieldButton(){
    browser.driver.sleep(500);
    var buttonDate = element(by.xpath('//*[@id="datetime-10-0"]/span'));
    buttonDate.click();
    browser.driver.sleep(500);
    var buttonDateDay = element(by.xpath('/html/body/ion-app/ion-picker-cmp/div/div[2]/div[2]/div/button[31]'));
    buttonDateDay.click();
    browser.driver.sleep(500);
    var buttonDateMonth = element(by.xpath('/html/body/ion-app/ion-picker-cmp/div/div[2]/div[3]/div/button[12]'));
    browser.driver.sleep(500);
    var buttonDateYear = element(by.xpath('/html/body/ion-app/ion-picker-cmp/div/div[2]/div[4]/div/button[1]'));
    buttonDateYear.click();
    browser.driver.sleep(500);
    var buttonDateDone = element(by.xpath('/html/body/ion-app/ion-picker-cmp/div/div[1]/div[2]/button/span'));
    buttonDateDone.click();
}

export function clickGenreFieldButton(){
    browser.driver.sleep(500);
    var buttonGenre = element(by.xpath('//*[@id="select-13-0"]/span'));
    buttonGenre.click();
    browser.driver.sleep(500);
    var buttonGenreSelect = element(by.xpath('//*[@id="alert-input-0-1"]/span'));
    buttonGenreSelect.click();
    browser.driver.sleep(500);
    var buttonGenreDone = element(by.xpath('/html/body/ion-app/ion-alert/div/div[4]/button[2]/span'));
    buttonGenreDone.click();
}

export function clickRegisterButton(){
    browser.driver.sleep(500);
    var buttonRegister = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[3]/div/ion-list/button[2]/span'));
    buttonRegister.click();
}
