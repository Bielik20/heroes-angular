import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Hero } from '../_models/hero';
import { ApiBaseService } from './api-base.service';

@Injectable()
export class HeroService extends ApiBaseService {

  private heroesUrl = this.apiUrl + '/heroes';  // URL to web api

  constructor(private http: Http) { super(); }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl, { headers: this.headers() })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url, { headers: this.headers() })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    return this.http
      .put(this.heroesUrl, JSON.stringify(hero), { headers: this.headers() })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers() })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers() })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
