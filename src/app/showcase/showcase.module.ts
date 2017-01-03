import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseComponent } from './showcase.component';

import { DataService } from '../shared/data.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ShowcaseComponent ],
  exports: [ ShowcaseComponent ],
  providers: [ DataService ]
})
export class ShowcaseModule { }

// THIS MODULE IS NOT YET BEING USED
