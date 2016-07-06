import { Component, OnInit, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-list-works',
  templateUrl: 'list-works.component.html',
  styleUrls: ['list-works.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class ListWorksComponent implements OnInit {

  @Input() listWorks;

  constructor() {}

  ngOnInit() {
  }

}
