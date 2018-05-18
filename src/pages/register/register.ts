import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoginPage } from '../login/login';
import { EmailValidation } from '../../validators/email-validation';
import { CpfValidation } from '../../validators/cpf-validation';
import { RestUserProvider } from '../../providers/rest-user';
//import { ListUserPage } from '../listuser/listuser';
import { LoginPage } from '../login/login';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {
  // @ViewChild('signup') signup: any;
  @ViewChild(Slides) slides: Slides;

  submitAttemp: boolean = false;
  errorUsername: boolean = false;
  errorPassword: boolean = false;
  errorEmail: boolean = false;
  errorWhatsapp: boolean = false;
  errorName: boolean = false;
  errorCpf: boolean = false;
  errorAddress: boolean = false;
  errorDdd: boolean = false;
  isEnabled: boolean = false;

  //user = { username:'', name:'', cpf:'', email:'', birth:'', address:'', password:'', region:'', preference:'', howDidYouKnow:'', want_ongs:'', ddd:'', whatsapp:'', genre:''};
  signupForm: FormGroup;

  constructor(public alertCtrl: AlertController,       public formBuilder: FormBuilder, public navCtrl: NavController, public restProvider: RestUserProvider) {
    // Validators.pattern('([0-9]).{9,9}$')
    // Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$'), Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9]*')])],
      email: ['', Validators.compose([Validators.required, EmailValidation.isValid])],
      whatsapp: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(9), Validators.pattern('[0-9]*')])],
      name: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+([ ]?[a-zA-Z])*$'), Validators.required])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), CpfValidation.isValid])],
      birth: ['', Validators.compose([Validators.required])],
      address: ['',Validators.compose([Validators.minLength(5), Validators.maxLength(80), Validators.required]) ],
      region:['', Validators.required],
      preference:['', Validators.required],
      howDidYouKnow: ['', Validators.required],
      ddd: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.pattern('[0-9]*')])],
      genre:['', Validators.required],
      want_ongs:['', Validators.required],
      // confirmPassword: ['', Validators.required]
    });

  }
  // constructor(public navController: NavController,  public formBuilder: FormBuilder, public RestUserProvider: RestUserProvider) {

    // }, { validator: this.matchingPasswords('password', 'confirmPassword')})

  // matchingPasswords(passwordKey: string, confirmPasswordKey: string){
  //   return (group: FormGroup): {[key: string]: any} => {
  //     let password = group.controls[passwordKey];
  //     let confirmPassword = group.controls[confirmPasswordKey];


  btnGoToLogin(){
    // this.navCtrl.canGoBack();
    this.navCtrl.push(LoginPage);
  }

  saveUser() {
    this.restProvider.saveUser(this.signupForm.value).then((result) => {
       console.log("oieeee");
      this.navCtrl.push(LoginPage);
    }, (err) => {
      console.log(err);
    });
  }

  showError(data, id: string){

    switch (id) {
      case 'us':
        if (!data) {
          this.errorUsername = true;
        } else {
          this.errorUsername = false;
        }
        break;
      case 'pw':
        if (!data) {
          this.errorPassword = true;
        } else {
          this.errorPassword = false;
        }
        break;
      case 'em':
        if (!data) {
          this.errorEmail = true;
        } else {
          this.errorEmail = false;
        }
        break;
      case 'wa':
        if (!data) {
          this.errorWhatsapp = true;
        } else {
          this.errorWhatsapp = false;
        }
        break;
      case 'nm':
        if (!data) {
          this.errorName = true;
        } else {
          this.errorName = false;
        }
        break;
      case 'cpf':
        if (!data) {
          this.errorCpf = true;
        } else {
          this.errorCpf = false;
        }
        break;
      case 'ad':
        if (!data) {
          this.errorAddress = true;
        } else {
          this.errorAddress = false;
        }
        break;
      case 'ddd':
        if (!data) {
          this.errorDdd = true;
        } else {
          this.errorDdd = false;
        }
      default:
        break;
    }

  }

  // checkPasswords(data){
  //   // var pw = document.getElementsByName("confirm");
  //   console.log('Data = ', data);
  //   console.log('Signup = ', this.signupForm.value.password);

  //   // if(data == this.signupForm.value.password){
  //   //   console.log("passooou");
  //   // }else{
  //   //   console.log("deu errado");
  //   // }
  // }

  ionViewDidLoad(){
    this.slides.lockSwipes(true);
  }

  btnNext(){
      this.slides.lockSwipes(false);
      this.slides.slideNext(500);
      this.slides.lockSwipes(true);


  }

  btnBack(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev(500);
    this.slides.lockSwipes(true);
  }

}
