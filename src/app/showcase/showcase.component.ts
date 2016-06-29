import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-showcase',
  templateUrl: 'showcase.component.html',
  styleUrls: ['showcase.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class ShowcaseComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
