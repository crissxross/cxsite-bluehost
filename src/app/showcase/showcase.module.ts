import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { ShowcaseComponent } from './showcase.component';
import { ArtworksComponent } from './artworks/artworks.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ShowcaseComponent,
    ArtworksComponent,
  ],
  exports: [ ShowcaseComponent ]
})
export class ShowcaseModule { }
