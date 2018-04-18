import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestApiProvider {
  //private apiUrl = 'http://localhost:8000/api/';
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getActivitiesList(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'activities').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getActivity(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'activities/2/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
