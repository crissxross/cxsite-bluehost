import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { ShowcaseComponent } from './showcase.component';
import { FeaturedWorksComponent } from './featured-works/featured-works.component';
import { ListWorksComponent } from './list-works/list-works.component';
import { CollapseToggleDirective } from '../shared/collapse-toggle.directive';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ShowcaseComponent,
    FeaturedWorksComponent,
    ListWorksComponent,
    CollapseToggleDirective
  ],
  exports: [ ShowcaseComponent ]
})
export class ShowcaseModule { }
