import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  @ViewChild('signup') signup: any;
  @ViewChild(Slides) slides: Slides;

  submitAttemp: boolean = false;
  user = { username:'', name:'', cpf:'', email:'', birth:'', address:'', password:'', region:'', preference:'', howDidYouKnow:'', want_ongs:'', ddd:'', whatsapp:'', genre:''};

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

  }

  saveUser() {
    this.restProvider.saveUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
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
