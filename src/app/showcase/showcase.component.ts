import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {Observable} from 'rxjs/Observable';

import { DataService } from '../shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-showcase',
  templateUrl: 'showcase.component.html',
  styleUrls: ['showcase.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})
export class ShowcaseComponent implements OnInit {

  featuredWork$: Observable<any>;
  listWork$: Observable<any>;
  // work$: Observable<any>;
  // work: any;

  constructor(
    private _dataService: DataService,
    private _router: Router) { }

  ngOnInit() {
    this.featuredWork$ = this._dataService.getFeaturedWorks();
    this.listWork$ = this._dataService.getListWorks();
  }

  // gotoDetail() {
  //   this._router.navigate(['/detail', this.work.id]);
  // }

}
