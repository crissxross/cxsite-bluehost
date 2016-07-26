import { Component, OnInit, Input, trigger, state, style, animate, transition } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

import { CollapseToggleDirective } from '../../shared/collapse-toggle.directive';

@Component({
  moduleId: module.id,
  selector: 'app-featured-works',
  templateUrl: 'featured-works.component.html',
  styleUrls: ['../showcase.component.css', 'featured-works.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, CollapseToggleDirective],
  animations: [
    trigger('panelState', [
      state('open', style({opacity: 1, height: '*' })),
      transition('void => *', [
        style({opacity: 0, height: '0' }),
        animate('200ms ease-in-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in-out', style({opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class FeaturedWorksComponent implements OnInit {

  @Input() featuredWorks;

  constructor() { }

  ngOnInit() {
  }

}
