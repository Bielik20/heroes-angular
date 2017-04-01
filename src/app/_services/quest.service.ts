import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Quest } from '../_models/quest';
import { ApiBaseService } from './api-base.service';

@Injectable()
export class QuestService {

  private questsUrl = this.apiBase.apiUrl + '/quests';  // URL to web api

  constructor(private http: Http, private apiBase: ApiBaseService) { }

  getAll(): Observable<Quest[]> {
    return this.http.get(this.questsUrl, { headers: this.apiBase.headers() })
      .map(response => response.json())
  }

  getOwnedByHero(hero_id: number): Observable<Quest[]> {
    const url = `${this.questsUrl}/ownedbyhero/${hero_id}`;
    return this.http.get(url, { headers: this.apiBase.headers() })
      .map(response => response.json())
  }
}
