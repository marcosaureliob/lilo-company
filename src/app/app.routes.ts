import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Login } from './views/login/login';
import { NewPassword } from './views/new-password/new-password';
import { Register } from './views/register/register';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'password-recovery', component: NewPassword },
  { path: 'register', component: Register },
];
