import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ARTWORKS } from './artworks/artworks-data';
// import { FEATUREDWORKS } from './featured-works/featured-data';
// import { LISTWORKS } from './list-works/list-data';

@Component({
  selector: 'app-showcase',
  template: `
    <app-artworks [artworks]="artworks"><app-artworks>
    <!-- <app-featured-works [featuredWorks]="featuredWorks"></app-featured-works>
    <app-list-works [listWorks]="listWorks"></app-list-works> -->
  `,
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {

  artworks = ARTWORKS;
  // featuredWorks = FEATUREDWORKS;
  // listWorks = LISTWORKS;

  constructor(private _router: Router) { }

}
