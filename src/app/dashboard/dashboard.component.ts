import { Component, OnInit } from '@angular/core';

import { Hero } from '../_models/hero';
import { HeroService } from '../_services/hero.service';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../_services/alert.service'

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService, private alertService: AlertService ) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes.slice(1,5),
        error => this.alertService.handleError(error)
      );
  }

}
