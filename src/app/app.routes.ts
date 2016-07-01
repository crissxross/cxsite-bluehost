import { provideRouter, RouterConfig } from '@angular/router';

import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutComponent } from './about/about.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/showcase', terminal: true },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'about', component: AboutComponent }
  // { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
