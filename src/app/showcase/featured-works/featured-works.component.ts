import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-featured-works',
  templateUrl: './featured-works.component.html',
  styleUrls: ['../showcase.component.css', './featured-works.component.css'],
  // animations: [
  //   trigger('panelState', [
  //     state('open', style({opacity: 1, height: '*' })),
  //     transition('void => *', [
  //       style({opacity: 0, height: '0' }),
  //       animate('200ms ease-in-out')
  //     ]),
  //     transition('* => void', [
  //       animate('200ms ease-in-out', style({opacity: 0, height: 0 }))
  //     ])
  //   ])
  // ]
})
export class FeaturedWorksComponent {

  @Input() featuredWorks;

  constructor() { }

}
