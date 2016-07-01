import { Component, Input, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { DataService } from '../shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-showcase',
  templateUrl: 'showcase.component.html',
  styleUrls: ['showcase.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class ShowcaseComponent implements OnInit {

  featuredWorks: any[];
  listWorks: any[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getFeaturedWorks()
      .subscribe((featuredWorks) => this.featuredWorks = featuredWorks,
      (err) => { console.log(err); }
    );
    this._dataService.getListWorks()
      .subscribe((listWorks) => this.listWorks = listWorks,
      (err) => { console.log(err); }
      );
  }

  // onPlay() {

  // }

}
