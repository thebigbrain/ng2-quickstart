import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeroesModule } from '../heroes/heroes.module';
import { CrisisCenterModule } from '../crisis-center/crisis-center.module';

import { HomeComponent } from '../home/home.component';

import { DialogService }  from './dialog.service';
import { CanDeactivateGuard }    from './can-deactivate-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    //PageNotFoundComponent
  ],
  providers: [
    DialogService,
    CanDeactivateGuard
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
