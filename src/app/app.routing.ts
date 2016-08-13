import { Routes, RouterModule } from '@angular/router';

import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/showcase', pathMatch: 'full' },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(routes);
