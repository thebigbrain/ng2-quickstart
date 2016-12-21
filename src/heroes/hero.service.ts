import { Injectable } from '@angular/core';

let _id = 0

export class Hero {
  public id: number

  constructor(
    public name?: string,
    public power?: string,
    public alterEgo?: string
  ) {
    this.id = _id++
  }
}

let HEROES = [
  new Hero('Mr. Nice'),
  new Hero('Narco'),
  new Hero('Bombasto'),
  new Hero('Celeritas'),
  new Hero('Magneta'),
  new Hero('RubberMan')
];

let heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {

  getHeroes() { return heroesPromise; }

  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }

  saveHero (hero: Hero) {
    return heroesPromise
      .then(heroes => heroes.push(hero));
  }
}
