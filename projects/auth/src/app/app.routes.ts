import { Routes } from '@angular/router';
import { Register } from './features/register/register';
import { Login } from './features/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
];
