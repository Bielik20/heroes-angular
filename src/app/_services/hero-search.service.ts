import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../_models/hero';
import { ApiBaseService } from './api-base.service';

@Injectable()
export class HeroSearchService {

  private heroesUrl = this.apiBase.apiUrl + '/heroes';  // URL to web api

  constructor(private http: Http, private apiBase: ApiBaseService) { }

  search(term: string): Observable<Hero[]> {
    const url = `${this.heroesUrl}/getbyname/${term}`;
    return this.http
      .get(url, { headers: this.apiBase.headers() })
      .map(response => response.json());
  }
}
