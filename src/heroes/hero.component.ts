import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Hero, HeroService }  from './hero.service';

@Component({
  selector: 'home',
  templateUrl: './hero.component.html'
})

export class HeroComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model: Hero

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
   ){}

  ngOnInit() {
    //this.model = new Hero('Dr IQ', this.powers[0], 'Chuck Overstreet');
    this.newHero()
  }

  newHero() {
    this.model = new Hero();
  }

  onSubmit() {
    this.service.saveHero(this.model)
    this.router.navigate(['/heroes'])
  }
}
