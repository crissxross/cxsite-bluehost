import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  featuredWork$: Observable<any>;
  listWork$: Observable<any>;

  constructor(
    private _dataService: DataService,
    private _router: Router) { }

  ngOnInit() {
    this.featuredWork$ = this._dataService.getFeaturedWorks();
    this.listWork$ = this._dataService.getListWorks();
  }

}
