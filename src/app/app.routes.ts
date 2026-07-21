import { Routes } from '@angular/router';
import { Signup } from './pages/auth/signup/signup';
import { Home } from './pages/home/home';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { Login } from './pages/auth/login/login';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'sign-up', component: Signup },
    { path: 'reset-password', component:ForgotPassword },
    { path: 'login', component: Login}
];
