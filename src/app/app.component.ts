import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdIcon,
    MdToolbar,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    ShowcaseComponent,
    AboutComponent
  ],
  providers: [DataService]
})
export class AppComponent {
  title = 'crissxross';
}
