import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router'

import { Quest } from '../_models/quest';
import { QuestService } from '../_services/quest.service';

@Component({
  selector: 'my-quests',
  templateUrl: './quests.component.html',
})

export class QuestsComponent implements OnInit, OnChanges {

  @Input()
  hero_id?: number;
  quests: Quest[];

  constructor(private questService: QuestService) { }

  ngOnInit() {
    if (this.hero_id == null)
      this.getQuests();
  }

  ngOnChanges() {
    if (this.hero_id != null)
      this.getOwnedByHero(this.hero_id);
  }

  getQuests(): void {
    this.questService.getAll()
      .then(quests => this.quests = quests);
  }

  getOwnedByHero(hero_id: number): void {
    this.questService.getOwnedByHero(hero_id)
      .then(quests => this.quests = quests);
  }

}
