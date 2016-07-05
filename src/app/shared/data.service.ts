import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
// Add the RxJS Observable operators we need in this app.
// import './rxjs-operators';

@Injectable()
export class DataService {

  private showcaseUrl = '../data/showcase.json';

  constructor(private http: Http) { }

  getFeaturedWorks() {
    return this.http.get(this.showcaseUrl)
      .map((res: Response) => res.json().featuredWorks)
      .do(data => console.log('showcase featuredWorks:', data))
      .catch(this.handleError);
  }

  getListWorks() {
    return this.http.get(this.showcaseUrl)
      .map((res: Response) => res.json().listWorks)
      .do(data => console.log('showcase listWorks:', data))
      .catch(this.handleError);
  }

  getDetailWork(id: string) {
    return this.getFeaturedWorks()
      .map(featuredWorks => featuredWorks.filter(work => work.id === id)[0]);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
