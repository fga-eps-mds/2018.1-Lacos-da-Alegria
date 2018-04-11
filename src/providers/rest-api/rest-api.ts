import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {
  private apiUrl = 'http://localhost:8000/';


  constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }


  getActivities(){
    return new Promise(resolve=>{
      this.http.get(this.apiUrl+'/activities').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
