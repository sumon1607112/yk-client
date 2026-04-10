import { Routes } from '@angular/router';

export const accountRoutes: Routes = [
  {
    path: 'account',
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      {
        path: 'register',
        loadComponent: () => import('./register/register').then(m => m.Register),
      },
      {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login),
      },
    ],
  },
];
