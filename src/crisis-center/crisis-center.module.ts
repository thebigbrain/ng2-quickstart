import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

import { CrisisService } from './crisis.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterHomeComponent,
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent
  ],
  providers: [
    CrisisService
  ]
})

export class CrisisCenterModule {}
