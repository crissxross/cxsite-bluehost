import { provideRouter, RouterConfig } from '@angular/router';

import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseDetailComponent } from './showcase/showcase-detail/showcase-detail.component';
import { AboutComponent } from './about/about.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/showcase', terminal: true },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'showcase/:id', component: ShowcaseDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
