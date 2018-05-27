import { browser, element, by} from 'protractor';
import { send } from 'q';
import { HttpModule } from '@angular/http';



var chai = require('chai')
    , chaiHttp = require('chai-http');
var server = 'http://localhost:8000';

export function signInUser(user) {
  fillSigninFields(user);
  clickLoginButton();
}

export function signUpUser(user) {
  browser.driver.sleep(500);
  fillPageOneSignupFields(user);
  browser.driver.sleep(500);
  clickPageOneNextButton();
  browser.driver.sleep(500);

  fillPageTwoSignupFields(user);
  browser.driver.sleep(500);
  clickPageTwoNextButton();
  browser.driver.sleep(500);

  fillPageThreeSignupFields();
  browser.driver.sleep(500);
  clickRegisterButton();
  browser.driver.sleep(500);
}

export function fillSigninFields(user){
    var usernameField = element(by.xpath('//*[@class="field-login"]/ion-item[1]/div[1]/div[1]/ion-input[1]/input'));
    usernameField.sendKeys(user.username);

    var passwordField = element(by.xpath('//*[@name="password"]/input[1]'));
    passwordField.sendKeys(user.password);
}

export function clickLoginButton(){
    browser.driver.sleep(500);
    var loginButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-login/ion-content/div[2]/form/ion-list/div[2]/button'));
    loginButton.click();
}

export function goToLoginPage() {
  browser.get('');
  browser.driver.sleep(500);
  clickLastSlide();
  browser.driver.sleep(500);
  clickEntryButton();
}

export function fillPageOneSignupFields(user){
    var usernameField = element(by.xpath('//*[@formcontrolname="username"]/input[1]'));
    usernameField.sendKeys(user.username);

    var nameField = element(by.xpath('//*[@formcontrolname="name"]/input[1]'));
    nameField.sendKeys(user.name);

    var emailField = element(by.xpath('//*[@formcontrolname="email"]/input[1]'));
    emailField.sendKeys(user.email);

    var passwordField = element(by.xpath('//*[@formcontrolname="password"]/input[1]'));
    passwordField.sendKeys(user.password);

    var passwordVerifyField = element(by.xpath('//*[@formcontrolname="confirmPassword"]/input[1]'));
    passwordVerifyField.sendKeys(user.passwordVerify);
}

export function fillPageTwoSignupFields(user){
    var cpfField = element(by.xpath('//*[@formcontrolname="cpf"]/input[1]'));
    cpfField.sendKeys(user.cpf);

    var enderecoField = element(by.xpath('//*[@formcontrolname="address"]/input[1]'));
    enderecoField.sendKeys(user.address);

    clickDateFieldButton();

    browser.driver.sleep(500);
    var dddField = element.all(by.xpath('//*[@formcontrolname="ddd"]/input[1]'));
    dddField.sendKeys(user.ddd);

    var whatsappField = element(by.xpath('//*[@formcontrolname="whatsapp"]/input[1]'));
    whatsappField.sendKeys(user.whatsapp);

    clickGenreFieldButton();
}

export function fillPageThreeSignupFields(){
    selectCity();
    selectHospital();
    selectHowYouHaveMeet();
    selectWantToVisitChariti();
}

function selectCity() {
  var cityFieldButton = element(by.xpath('//*[@formcontrolname="region"]'));
  cityFieldButton.click();
  browser.driver.sleep(500);
  var selectCityButton = element(by.xpath('//*[@id="alert-input-1-2"]/span'));
  selectCityButton.click();
  browser.driver.sleep(500);
  var cityDoneButton = element(by.xpath('/html/body/ion-app/ion-alert/div/div[4]/button[2]/span'));
  cityDoneButton.click();
  browser.driver.sleep(500);
}

function selectHospital() {
  var hospitalVisitButton = element(by.xpath('//*[@id="select-15-0"]/span'));
  hospitalVisitButton.click();
  browser.driver.sleep(500);
  var selectHospitalVisitButton = element(by.xpath('//*[@id="alert-input-2-2"]/span'));
  selectHospitalVisitButton.click();
  browser.driver.sleep(500);
  var hospitalVisitDoneButton = element(by.xpath('/html/body/ion-app/ion-alert/div/div[4]/button[2]/span'));
  hospitalVisitDoneButton.click();
  browser.driver.sleep(500);
}

function selectHowYouHaveMeet() {
  var howDidYouMeetButton = element(by.xpath('//*[@id="select-16-0"]/span'));
  howDidYouMeetButton.click();
  browser.driver.sleep(500);
  var selectHowDidYouMeetButton = element(by.xpath('//*[@id="alert-input-3-3"]/span'));
  selectHowDidYouMeetButton.click();
  browser.driver.sleep(500);
  var howDidYouMeetDoneButton = element(by.xpath('/html/body/ion-app/ion-alert/div/div[4]/button[2]/span'));
  howDidYouMeetDoneButton.click();
  browser.driver.sleep(500);
}

function selectWantToVisitChariti() {
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
    var buttonSignUp = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-login/ion-content/div[2]/div[2]/button'));
    buttonSignUp.click();
}

function clickPageOneNextButton(){
    browser.driver.sleep(500);
    var buttonNextStep = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[1]/div/ion-list/button'));

    browser.driver.sleep(500);
    buttonNextStep.click();
}

function clickPageTwoNextButton(){
    browser.driver.sleep(500);
    var buttonNextStep = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-register/ion-content/div[2]/form/ion-slides/div/div[1]/ion-slide[2]/div/ion-list/button[2]/span'));
    buttonNextStep.click();
}

function clickDateFieldButton(){
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

function clickGenreFieldButton(){
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

function clickRegisterButton(){
    browser.driver.sleep(500);
    var buttonRegister = element(by.xpath('//*[starts-with(@class, "btn-send")]'));
    buttonRegister.click();
}

export function deleteUser(user){
    chai.use(chaiHttp);
    chai.request(server)
    .post('/api/profile/delete/')
    .send(user)
    .end((err, res) =>{
    });
}

export function clickAboutButton(){
    var aboutButon = element(by.xpath('//*[@id="tabpanel-t1-3"]/page-menu-app/ion-content/div[2]/button[3]/span'));
    aboutButon.click();
}

export function clickMenuButton(){
    var MenuButton = element(by.xpath('//*[@id="tab-t1-3"]'));
    MenuButton.click();
}

export function clickHelpButton(){
    var helpButton = element(by.xpath('//*[@id="tabpanel-t1-3"]/page-menu-app/ion-content/div[2]/button[2]/span'));
    helpButton.click();
}

export function goToAboutPage(){
    clickMenuButton();
    browser.driver.sleep(500);
    clickAboutButton();
}

export function goToHelpPage(){
    clickMenuButton();
    browser.driver.sleep(500);
    clickHelpButton();
}

export function clickActivityDetailsButton(){;
    var activityDetailsButton = element(by.xpath('//*[@id="tabpanel-t1-3"]/page-menu-app/ion-content/div[2]/button[1]/span'));
    activityDetailsButton.click();

}

export function goToActivityDetailsPage(){
    clickMenuButton();
    browser.driver.sleep(500);
    clickActivityDetailsButton();
}

export function clickBackActivityDetailsPageButton(){

    var BackActivityDetailsPageButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-tabs/ion-tabs/page-settings/ion-header/ion-navbar/button'));
    BackActivityDetailsPageButton.click();
}

export function clickBackHelpPageButton(){
    var backHelpPageButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-tabs/ion-tabs/page-help/ion-header/ion-navbar/button/span'));
    backHelpPageButton.click();

}

export function clickBackAboutPageButton(){
    var backAboutPageButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-tabs/ion-tabs/page-about/ion-header/ion-navbar/button/span'));
    backAboutPageButton.click();
}

export function clickBackSettingsPageButton(){
    var backSettingsPageButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-tabs/ion-tabs/page-settings/ion-header/ion-navbar/button/span'));
    backSettingsPageButton.click();
}

export function clickExitButton(){
    var exitButton = element(by.xpath('//*[@id="tabpanel-t1-3"]/page-menu-app/ion-content/div[2]/button[5]/span'));
    exitButton.click();
}

export function clickSettingsButton(){
    var settingsButton = element(by.xpath('//*[@id="tabpanel-t1-3"]/page-menu-app/ion-content/div[2]/button[4]/span'));
    settingsButton.click();

}
