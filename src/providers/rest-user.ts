import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestUserProvider {
  apiUrl = 'http://localhost:8000/api';
  fakeUrl = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {
    console.log('Hello RestUserProvider Provider');
  }

  saveUser(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/profile/', JSON.stringify(data), {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
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

  getListUsers(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/profile/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  userLogin(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/login/', JSON.stringify(data), {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
        .subscribe(res => {
          console.log('Logged in'),
          resolve(res);
        }, (err) => {
          console.log('Error on login user'),
          reject(err);
        });
    });
  }

}
