import { Component } from '@angular/core';

import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'crissxross';
}
