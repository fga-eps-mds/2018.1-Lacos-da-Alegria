import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { LoginPage } from '../login/login';
// import { EmailValidator } from '../../validators/email';
import { RestUserProvider } from '../../providers/rest-user';
//import { ListUserPage } from '../listuser/listuser';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  // @ViewChild('signup') signup: any;
  @ViewChild(Slides) slides: Slides;

  submitAttemp: boolean = false;
  //user = { username:'', name:'', cpf:'', email:'', birth:'', address:'', password:'', region:'', preference:'', howDidYouKnow:'', want_ongs:'', ddd:'', whatsapp:'', genre:''};
  signupForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public restProvider: RestUserProvider) {
   
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.maxLength(5), Validators.pattern('[a-zA-Z]*'), Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
      email: ['', Validators.compose([Validators.required])],
      whatsapp: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('([0-9]).{9,9}$')]) ],
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('([0-9]).{11,11}$')])],
      birth: ['', Validators.compose([Validators.required, Validators.pattern('^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$')])],
      address: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required]) ],
      region:['', Validators.required],
      preference:['', Validators.required],
      howDidYouKnow: ['', Validators.required],
      ddd: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('([0-9]).{3,3}$')])],
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

  saveUser() {
    // this.restProvider.saveUser(this.signupForm).then((result) => {
       console.log("oieeee");
    //   this.navCtrl.push(LoginPage);
    // }, (err) => {
    //   console.log(err);
    // });
  }

  // ionViewDidLoad(){
  //   this.slides.lockSwipes(true);
  // }

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
  //   if(!this.signupOne.valid){
  //     this.navController.push(LoginPage);
  //   }
  //   else{
  //     console.log("Success!");
  //     console.log(this.signupOne.value);
  //   }
  // }*/
  // ionViewDidEnter() {
  //   this.menu.swipeEnable(false);
  // }

}
