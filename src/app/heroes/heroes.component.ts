import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Hero } from '../_models/hero'
import { HeroService } from '../_services/hero.service'
import { AlertService } from '../_services/alert.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error => this.alertService.handleError(error)
      )
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .subscribe(
        hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        },
        error => this.alertService.handleError(error)
      );
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .subscribe(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        },
        error => this.alertService.handleError(error)
      );
  }
}
