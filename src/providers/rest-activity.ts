import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestActivityProvider {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) {
    console.log('Hello RestUserProvider Provider');
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

  getActivity(id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'activities/' + id + '/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
