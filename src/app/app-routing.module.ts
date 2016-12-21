import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CrisisListComponent }  from './crisis-list.component';
import { HomeComponent } from '../home/home.component';


const appRoutes: Routes = [
  //{ path: 'crisis-center', component: CrisisListComponent },
  { path: '', component: HomeComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
