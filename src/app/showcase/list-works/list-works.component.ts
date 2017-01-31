import { Component, Input, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-list-works',
  templateUrl: './list-works.component.html',
  styleUrls: ['../showcase.component.css', './list-works.component.css'],
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
export class ListWorksComponent {

  @Input() listWorks;

  constructor() {}

}
