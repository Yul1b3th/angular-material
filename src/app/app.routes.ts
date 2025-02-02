import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'form1',
    loadComponent: () => import('./formularios/form1/form1.component'),
  },
  {
    path: 'form2',
    loadComponent: () => import('./formularios/form2/form2.component'),
  },
];
