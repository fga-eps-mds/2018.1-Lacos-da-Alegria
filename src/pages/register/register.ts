import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  @ViewChild('signup') signup: any;
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

}
