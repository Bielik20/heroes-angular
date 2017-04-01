import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Quest } from '../_models/quest';

@Injectable()
export class QuestService {

  private questsUrl = 'api/quests';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getAll(): Promise<Quest[]> {
    return this.http.get(this.questsUrl)
      .toPromise()
      .then(response => response.json().data as Quest[])
      .catch(this.handleError);
  }

  getOwnedByHero(hero_id: number): Promise<Quest[]> {
    const url = `${this.questsUrl}?hero_id=${hero_id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Quest[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
