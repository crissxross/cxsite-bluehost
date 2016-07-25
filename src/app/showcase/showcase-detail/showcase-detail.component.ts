import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { DataService } from '../../shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'app-showcase-detail',
  templateUrl: 'showcase-detail.component.html',
  styleUrls: ['showcase-detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ShowcaseDetailComponent implements OnInit {
  @Input() work: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) { }

// NOTE: params is an observable
  ngOnInit() {
    this.work = this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.dataService.getDetailWork(id)
          .do(work => console.log('Work: ', work))
          .subscribe(work => this.work = work);
      });
  }

}
// NOT USING THIS COMPONENT !!!
