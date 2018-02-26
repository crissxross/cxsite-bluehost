import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ARTWORKS } from './artworks/artworks-data';

@Component({
  selector: 'app-showcase',
  template: `
    <app-artworks [artworks]="artworks"><app-artworks>
  `,
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {

  artworks = ARTWORKS;

  constructor(private _router: Router) { }

}
