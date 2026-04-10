import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./features/account/account.routes').then(m => m.accountRoutes),
  },
  { path: '**', redirectTo: 'register' },
];
