import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Login } from './views/login/login';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: Login },
  { path: 'home', component: Home },
];
