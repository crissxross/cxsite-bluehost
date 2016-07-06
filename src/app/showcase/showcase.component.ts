import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {Observable} from 'rxjs/Observable';

import { DataService } from '../shared/data.service';
import { FeaturedWorksComponent } from './featured-works/featured-works.component';
import { ListWorksComponent } from './list-works/list-works.component';

@Component({
  moduleId: module.id,
  selector: 'app-showcase',
  templateUrl: 'showcase.component.html',
  styleUrls: ['showcase.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    ROUTER_DIRECTIVES,
    FeaturedWorksComponent,
    ListWorksComponent
  ]
})
export class ShowcaseComponent implements OnInit {

  featuredWork$: Observable<any>;
  listWork$: Observable<any>;
  // moved the two below to FeaturedWorksComponent
  // showingMore = false;
  // selectedWork = null;

  constructor(
    private _dataService: DataService,
    private _router: Router) { }

  ngOnInit() {
    this.featuredWork$ = this._dataService.getFeaturedWorks();
    this.listWork$ = this._dataService.getListWorks();
  }

  // MOVED THESE FUNCTIONS TO FeaturedWorksComponent
// might need to use OBSERVABLES for this functionality
  // showMore(featuredWork) {
  //   this.selectedWork = featuredWork;
  //   console.log('selectedWork:', this.selectedWork.id);
  //   this.showingMore = true;
  // }

  // showLess() {
  //   this.showingMore = false;
  //   this.selectedWork = null;
  // }

}
