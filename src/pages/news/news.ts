import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestNewsProvider } from '../../providers/rest-news';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})

export class NewsPage {
  news_list: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public restNewsProvider: RestNewsProvider) {
      this.getNewsList()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  getNewsList(){
    return this.restNewsProvider.getNewsList()
    .then(data => {
      this.news_list = data;
    });
  }

}
