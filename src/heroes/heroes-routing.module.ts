import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'hero/new', component: HeroComponent },
  { path: 'heroes',  component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HeroRoutingModule { }
