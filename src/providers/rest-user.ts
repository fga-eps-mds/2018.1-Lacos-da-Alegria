import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

import { StorageService } from './storage.service';
import { reject } from 'q';
import { User } from '../models/user';

@Injectable()
export class RestUserProvider {
  apiUrl = 'http://localhost:8000/api';
  jwtHelper: JwtHelper = new JwtHelper();

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
        observe: 'response', // Capturar o HEADER
        responseType: 'text' // Evitor erro de parse de JSON em corpo vazio {}
      }
    );
  }

  getId(){
    let token = this.storage.getLocalAccessToken();
    if(token){
      token = this.jwtHelper.decodeToken(token);
      return token.user_id;
    }
    return null;
  }

  successfulLogin(username: string, access: string, refresh: string) {
    this.storage.setLocalUser(username, access, refresh);
  }

  deleteUser(id, password) {
    console.log('Id no delete = ', id);
    console.log('Password no delete = ',password);

    return new Promise((resolve,reject) => {
      this.http.post(
        this.apiUrl + '/profile/' + id + '/delete_user/',
        password,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  getUser(id){
    return new Promise((resolve,reject) => {
      this.http.get(this.apiUrl + '/profile/' + id + '/').subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
        console.log(err);
      });
    });
    // return this.http.get(this.apiUrl + 'profile' + id + '/');
  }

  editPassword(id, user){
    return this.http.post(this.apiUrl + '/profile/' + id + '/edit_user/',
        user,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
  }

  editProfile(id, user){
 
      // this.http.post(this.apiUrl + '/profile/' + id + '/edit_user/',
      //   user,
      //   {
      //     headers: new HttpHeaders().set('Content-Type', 'application/json'),
      //   })
        // .subscribe((data: any) => {
        //   console.log('user', data);
        //   // console.log('data password: ', data.valueOf())
        //   user.password  = data.password;
        //   console.log('password ', user.password, ' ====== entrando no put')
          return this.http.put(this.apiUrl + '/profile/' + id + '/',
          user,
          {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
          })
      //     .subscribe((data:any) => {
      //       console.log('put padrao = ',data);
      //     }, (error)=>{
      //       console.log('Erro put = ', error);
      //     })
      //   }, (err)=>{
      //     console.log ('Erro post = ',err);
      //   })
      // console.log("password changed: ",passwordChanged)
      // console.log("PASSWORD = ", user.password);
      // return this.http.put(this.apiUrl + '/profile/' + id + '/',
      //   user,
      //   {
      //     headers: new HttpHeaders().set('Content-Type', 'application/json'),
      //   })
      //   .subscribe((data:any) => {
      //     console.log('put padrao else = ',data);
      //   }, (error)=>{
      //     console.log('Erro put else = ', error);
      //   })
    
    // return this.http.post(this.apiUrl + '/profile/' + id + '/edit_user/',
    // user,
    //     {
    //       headers: new HttpHeaders().set('Content-Type', 'application/json'),
    //     }
    //   );
  }
}
