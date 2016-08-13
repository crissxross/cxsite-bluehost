import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES]
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
