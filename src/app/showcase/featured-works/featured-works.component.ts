import { Component, OnInit, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { CollapseToggleDirective } from '../../shared/collapse-toggle.directive';

@Component({
  moduleId: module.id,
  selector: 'app-featured-works',
  templateUrl: 'featured-works.component.html',
  styleUrls: ['featured-works.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, CollapseToggleDirective]
})
export class FeaturedWorksComponent implements OnInit {

  @Input() featuredWorks;

  constructor() {}

  ngOnInit() {
  }

}
