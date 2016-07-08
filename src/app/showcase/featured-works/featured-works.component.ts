import { Component, OnInit, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-featured-works',
  templateUrl: 'featured-works.component.html',
  styleUrls: ['featured-works.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class FeaturedWorksComponent implements OnInit {

  @Input() featuredWorks;
  // @Input() isSelected; // UNFINISHED!!!!!!!!!

  selectedWork = null;

  constructor() {}

  ngOnInit() {
  }

  // might need to use OBSERVABLES for this functionality
  showMore(featuredWork) {
    let isSelected = false;
    this.selectedWork = featuredWork;
    console.log('showMore selectedWork:', this.selectedWork.id);
    return isSelected = true; // UNFINISHED!!!!!!!!
  }

  // Or create a TOGGLE BUTTON?

  showLess() {
    this.selectedWork = null;
  }

}
