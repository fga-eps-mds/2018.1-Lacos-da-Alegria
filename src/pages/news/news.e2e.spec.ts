// import { browser, element, by, ExpectedConditions, Ptor } from 'protractor';
// import { clickAboutButton, clickEntryButton, clickLastSlide, clickLoginButton, clickSettingsButton, fillSigninFields, clickSignUpButton, signUpUser, goToLoginPage, signInUser, goToAboutPage, clickNewsButton} from '../../acceptanceTestFunctions/testFunctions';
//
// var user;
// var chai = require('chai')
//     , chaiHttp = require('chai-http');
// var server = 'http://localhost:8000';
//
// describe('News tests', () =>{
//     // Run before each case test
//     beforeEach(() => {
//
//         user = {
//             /* username: 'naruto',
//             password:'abc123456', */
//
//             username: 'renatinhosss3',
//             name: 'renato vinicius',
//             email: 'renatinho3@gmail.com',
//             password:'abc123456',
//             passwordVerify: 'abc123456',
//             cpf: '39789378084',
//             address: 'quadra 14',
//             ddd: '61',
//             whatsapp: '993675487'
//         };
//
//         goToLoginPage()
//         browser.driver.sleep(500);
//
//         // clickSignUpButton();
//         // browser.driver.sleep(500);
//         // signUpUser(user);
//
//         signInUser(user);
//         browser.driver.sleep(500);
//
//     });
//     afterEach(() => {
//
//     });
//
//     it('Should go to news page', () => {
//         clickNewsButton();
//
//         var titlePage = element(by.xpath('//page-news/ion-header/ion-navbar/div[2]/ion-title/div'));
//         expect(titlePage.getAttribute('innerHTML')).toContain('Notícias');
//     });
// });
