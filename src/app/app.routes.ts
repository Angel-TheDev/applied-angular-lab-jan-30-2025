import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { canMatchFeature } from '@shared';
import { HomeComponent } from './pages/home.component';
import { CounterLabComponent } from './counter-lab/counter-lab.component';
import { COUNTER_LAB_ROUTES } from './counter-lab/counter-lab.routes';

export const routes: Routes = [
  {
    path: 'resources',
    loadChildren: () =>
      import('./resources/resources.routes').then((r) => r.RESOURCE_ROUTES),
  },
  {
    path: 'demos',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./demos/demos.routes').then((r) => r.DEMO_ROUTES), // dynamic import
  },

  {
    path: 'golf',
    canMatch: [canMatchFeature('golf')],
    loadChildren: () => import('./golf/golf.routes').then((r) => r.GOLF_ROUTES),
  },
  {
    path: 'jeff-counter',
    data: {
      preload: true,
    },
    loadChildren: () =>
      import('./jeff-counter/counter.routes').then((r) => r.COUNTER_ROUTES),
  },
  {
    path: 'counter-lab',
    loadChildren: () =>
      import('./counter-lab/counter-lab.routes').then(
        (r) => COUNTER_LAB_ROUTES,
      ),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
