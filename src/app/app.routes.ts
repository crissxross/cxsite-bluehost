import { provideRouter, RouterConfig } from '@angular/router';

import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutComponent } from './about/about.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/showcase', pathMatch: 'full' },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
