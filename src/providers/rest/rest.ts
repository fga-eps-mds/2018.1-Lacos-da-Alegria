import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://localhost:8000/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getProfiles() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/profile').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  saveUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/profile/', JSON.stringify(data), {
          headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        })
        .subscribe(res => {
          console.log('Saving user'),
          resolve(res);
        }, (err) => {
          console.log('Error on saving user'),
          reject(err);
        });
    });
  }



  

}
