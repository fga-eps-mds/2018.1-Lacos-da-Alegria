import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { LocalUser } from '../../models/local-user';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://localhost:8000/api';
  fakeUrl = 'https://jsonplaceholder.typicode.com';
  // localUser = {token:'', usename:''}
  constructor(public http: HttpClient, public storage: StorageService) {
    console.log('Hello RestProvider Provider');
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

  authenticate(user) {
    return this.http.post(
      this.apiUrl+'/token/',
      user,
      {
        observe: 'response', // Capturar o HEADER
        responseType: 'text' // Evitor erro de parse de JSON em corpo vazio {}
      }
    );
  }

  // successfulLogin(authorizationValue: string) {
  //   let token = authorizationValue.substring(7);
  //   let localUser: LocalUser = {
  //     accessToken: token,
  //     username: username,
  //   };
  //   this.storage.setLocalUser(localUser);
  // }
  
  // userLogin(data) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.apiUrl+'/token/', JSON.stringify(data), {
  //         headers: new HttpHeaders().set('Content-Type', 'application/json'),
  //       })
  //       .subscribe(res => {
  //         console.log('Logged in'),
  //         resolve(res);
  //       }, (err) => {
  //         console.log('Error on login user'),
  //         reject(err);
  //       });
  //   });
  // }

  
}
