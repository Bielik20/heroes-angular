import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiBaseService {

  protected apiUrl = 'http://localhost:5000/api';  // URL to web api
  protected headers = () => new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.getAccessToken()
    });

  constructor() { }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
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
