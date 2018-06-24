import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestNewsProvider {
  apiUrl = 'http://localhost:8000/api';
  //apiUrl = 'http://178.128.160.80:8000/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getNewsList() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/news').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }
}