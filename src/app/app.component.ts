import { Component } from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

import { ShowcaseComponent } from './showcase/showcase.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MdIcon,
    MdToolbar,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    ShowcaseComponent
  ],
  providers: [MdIconRegistry]
})
export class AppComponent {
  title = 'crissxross';
}
