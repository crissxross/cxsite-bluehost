import { Routes, RouterModule } from '@angular/router';

import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/showcase', pathMatch: 'full' },
  { path: 'showcase', component: ShowcaseComponent, data: {page: 'showcase'} },
  { path: 'about', component: AboutComponent, data: {page: 'about'} }
];

export const routing = RouterModule.forRoot(routes);
