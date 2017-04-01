import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AlertService } from '../_services/alert.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiBaseService {

  public apiUrl = 'http://localhost:5000/api';  // URL to web api
  public headers = () => new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.getAccessToken()
    });

  constructor(private alertService: AlertService) { }

  public handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    switch(error.status) {
      case 401: 
        this.alertService.error("Something went wrong");
        break;
    }

    return Promise.reject(error.message || error);
  }

  private getAccessToken(): string {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      if(user && user.accessToken)
      {
          return `Bearer ${user.accessToken}`;
      }
      return "";
  }
}
