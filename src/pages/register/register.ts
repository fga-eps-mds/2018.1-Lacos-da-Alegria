import { AlertController, NavController, Slides } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CpfValidation } from '../../validators/cpf-validation';
import { EmailValidation } from '../../validators/email-validation';
import { RestUserProvider } from '../../providers/rest-user';
import { User } from '../../models/user';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {
  @ViewChild(Slides) slides: Slides;

  submitAttemp: boolean = false;
  errorUsername: boolean = false;
  errorPassword: boolean = false;
  errorCheckPasswords: boolean = false;
  errorEmail: boolean = false;
  errorWhatsapp: boolean = false;
  errorName: boolean = false;
  errorCpf: boolean = false;
  errorAddress: boolean = false;
  errorDdd: boolean = false;
  isEnabled: boolean = false;

  signupForm: FormGroup;

  constructor(public alertCtrl: AlertController, public formBuilder: FormBuilder, public navCtrl: NavController, public restProvider: RestUserProvider) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$'), Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9]*')])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(32), Validators.pattern('[a-zA-Z0-9]*')])],
      email: ['', Validators.compose([Validators.required, EmailValidation.isValid])],
      whatsapp: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(9), Validators.pattern('[0-9]*')])],
      name: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+([ ]?[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ  ])*$'), Validators.required])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), CpfValidation.isValid])],
      birth: ['', Validators.compose([Validators.required])],
      address: ['',Validators.compose([Validators.minLength(5), Validators.maxLength(80), Validators.required]) ],
      region:['', Validators.required],
      preference:['', Validators.required],
      howDidYouKnow: ['', Validators.required],
      ddd: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('((([1,4,6,8,9][1-9])|(2[1,2,4,7,8])|(3[1-8])|(4[1-9])|(5[1-5])|(7[1,3,4,5,7,9])))')])],
      genre:['', Validators.required],
      want_ongs:['', Validators.required],
    });

  }

  checkPasswords(){
    if(this.signupForm.value.password != this.signupForm.value.confirmPassword && this.signupForm.value.confirmPassword){
      this.errorCheckPasswords = true;
    } else {
      this.errorCheckPasswords = false;
    }
  }

  getForm(): User{
    let user: User = {
      username: this.signupForm.value.username,
      password: this.signupForm.value.password,
      email: this.signupForm.value.email,
      whatsapp: this.signupForm.value.whatsapp,
      name: this.signupForm.value.name,
      cpf: this.signupForm.value.cpf,
      birth: this.signupForm.value.birth,
      address: this.signupForm.value.address,
      region: this.signupForm.value.region,
      preference: this.signupForm.value.preference,
      howDidYouKnow: this.signupForm.value.howDidYouKnow,
      ddd: this.signupForm.value.ddd,
      genre: this.signupForm.value.genre,
      want_ongs: this.signupForm.value.want_ongs,
      role: 'Novato',
      inscrito: 'false'
    }

    return user;
  }

  /* Objective: this method will save user's information on the API.
     Parameters: it does not receive any parameters. */

  saveUser() {
    this.restProvider.saveUser(this.getForm()).then((result) => {
      this.navCtrl.push(LoginPage);
    }, (err) => {
      let alerta: string;

      if(err.error.username){
        console.log("erro no username")
        alerta = "Nome de usuário";
      } else if (err.error.email){
        console.log("erro no email")
        alerta = "Esse email";
      } else if (err.error.cpf) {
        alerta = "Esse CPF"
      } else {
        return -1;
      }

      let alert = this.alertCtrl.create({
        title: 'Ops!',
        subTitle: alerta + ' já está sendo usado!'+
        ' Por favor, modifique-o e tente novamente.',
        buttons: ['OK']
      });
      alert.present();

    });
  }

  showError(data, id: string){

    switch (id) {
      case 'us':
        if (!data && this.signupForm.value.username) {
          this.errorUsername = true;
        } else {
          this.errorUsername = false;
        }
        break;
      case 'pw':
        if (!data && this.signupForm.value.password) {
          this.errorPassword = true;
        } else {
          this.errorPassword = false;
        }
        break;
      case 'em':
        if (!data && this.signupForm.value.email) {
          this.errorEmail = true;
        } else {
          this.errorEmail = false;
        }
        break;
      case 'wa':
        if (!data && this.signupForm.value.whatsapp) {
          this.errorWhatsapp = true;
        } else {
          this.errorWhatsapp = false;
        }
        break;
      case 'nm':
        if (!data && this.signupForm.value.name) {
          this.errorName = true;
        } else {
          this.errorName = false;
        }
        break;
      case 'cpf':
        if (!data && this.signupForm.value.cpf) {
          this.errorCpf = true;
        } else {
          this.errorCpf = false;
        }
        break;
      case 'ad':
        if (!data && this.signupForm.value.address) {
          this.errorAddress = true;
        } else {
          this.errorAddress = false;
        }
        break;
      case 'ddd':
        if (!data && this.signupForm.value.ddd) {
          this.errorDdd = true;
        } else {
          this.errorDdd = false;
        }
      default:
        break;
    }

  }

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
