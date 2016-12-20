import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  /*{ path: 'hero/:id', component: HeroDetailComponent },
  { path: 'crisis-center', component: CrisisListComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: {
      title: 'Heroes List'
    }
  },*/
  { path: '', component: HomeComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent
    /*HeroListComponent,
    HeroDetailComponent,
    CrisisListComponent,
    PageNotFoundComponent*/
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
