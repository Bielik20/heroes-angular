import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../_models/hero';
import { ApiBaseService } from './api-base.service';

@Injectable()
export class HeroService {

  private heroesUrl = this.apiBase.apiUrl + '/heroes';  // URL to web api

  constructor(private http: Http, private apiBase: ApiBaseService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl, { headers: this.apiBase.headers() })
      .map(response => response.json())
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url, { headers: this.apiBase.headers() })
      .map(response => response.json())
  }

  update(hero: Hero): Observable<Hero> {
    return this.http
      .put(this.heroesUrl, JSON.stringify(hero), { headers: this.apiBase.headers() })
      .map(() => hero)
  }

  create(name: string): Observable<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.apiBase.headers() })
      .map(res => res.json())
  }

  delete(id: number): Observable<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.apiBase.headers() })
      .map(() => null)
  }
}
