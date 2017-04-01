import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiBaseService {

  public apiUrl = 'http://localhost:5000/api';  // URL to web api
  public headers = () => new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.getAccessToken()
    });

  constructor() { }

  private getAccessToken(): string {
      let user = JSON.parse(localStorage.getItem('currentUser'));
      if(user && user.accessToken)
      {
          return `Bearer ${user.accessToken}`;
      }
      return "";
  }
}
