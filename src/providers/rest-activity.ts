import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestActivityProvider {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) {
    console.log('Hello RestActivityProvider');
  }

  getHospitalActivitiesList(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'hospital-activities').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNGOActivitiesList(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'ngo-activities').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getHospitalActivity(id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'hospital-activities/' + id + '/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNGOActivity(id){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'ngo-activities/' + id + '/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
