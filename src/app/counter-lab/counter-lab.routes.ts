import { Routes } from '@angular/router';
import { CounterLabComponent } from './counter-lab.component';
import { UicComponent } from './pages/ui.component';

export const COUNTER_LAB_ROUTES: Routes = [
  {
    path: '',
    component: CounterLabComponent,
    providers: [],
    children: [
      {
        path: 'uic-component',
        component: UicComponent,
      },
    ],
  },
];
