import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FEATUREDWORKS } from './featured-works/featured-data';
import { LISTWORKS } from './list-works/list-data';

@Component({
  selector: 'app-showcase',
  template: `
  <app-featured-works [featuredWorks]="featuredWorks"></app-featured-works>
  <app-list-works [listWorks]="listWorks"></app-list-works>
  `,
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {

  featuredWorks = FEATUREDWORKS;
  listWorks = LISTWORKS;

  constructor(private _router: Router) { }

}
