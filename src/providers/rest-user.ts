import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class RestUserProvider {
  apiUrl = 'http://localhost:8000/api';
  constructor(public http: HttpClient, public storage: StorageService) {
    console.log('Hello RestProvider Provider');
  }

  saveUser(data) {
      return new Promise((resolve, reject) => {
        this.http.post(
          this.apiUrl+'/profile/',
          JSON.stringify(data),
          {
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

  userLogout() {
    this.storage.clearLocalUser();
    console.log('teste');
  }

  refreshToken(token){
    return this.http.post(
      this.apiUrl+'/token/refresh/',
      token,
      {
        //headers: new HttpHeaders().set('Content-Type', 'application/json'),

        observe: 'response', // Capturar o HEADER
        responseType: 'text' // Evitor erro de parse de JSON em corpo vazio {}
      }
    );
 }

  postActivity(id_user, id_activity){
    return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl+'/profile/'+id_user+'/relate_with_activity/?activity_key='+id_activity).subscribe(data => {
        resolve(data);
      }, (err) => {
        console.log(err.error.status);
      });
    });
  }

  getUser(id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/profile/' + id + '/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
