import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
selector: 'page-welcome',
templateUrl: 'welcome.html'
})

export class WelcomePage {
  hide = false;

  constructor(private navController: NavController, public navParams: NavParams) {
  }

  slider = [
    {
      title: 'Seja Bem-Vindo!',
      description: 'Arraste para a direita para conferir as funcionalidades do aplicativo da Laços da Alegria.',
      image: "assets/imgs/logooficial.png"
    },

    {
      title: 'Tela de Atividades',
      description: 'Nesta aba você confere as atividades disponíveis e pode se inscrever na de sua preferência.',
      image: "assets/imgs/activitieswelcome.png"
    },

    {
      title: 'Tela de Noticias',
      description: 'Nesta aba você confere as últimas notícias da Laços da Alegria, além de notificações relevantes.',
      image: "assets/imgs/newswelcome.png"
    },

    {
      title: 'Tela de Perfil',
      description: 'Nesta aba você pode visualizar seus dados pessoais e modificá-los.',
      image: "assets/imgs/perfilwelcome.png"
    },

  ]

  slideShow(){
    this.hide = true;
  }

  btnEntrar(){
    this.navController.push(LoginPage);
  }

}


