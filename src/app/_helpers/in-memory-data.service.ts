import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    let quests = [
      {id: 1, hero_id: 12, title: 'First quest', completed: true},
      {id: 2, hero_id: 12, title: 'Second quest', completed: false},
      {id: 3, hero_id: 11, title: 'In memory', completed: false},
      {id: 4, hero_id: 18, title: 'Let the sky', completed: false},
    ];
    return {heroes, quests};
  }
}