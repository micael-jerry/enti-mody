import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthLoginComponent } from './auth/login/auth-login.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'auth', component: AuthComponent, pathMatch: 'full' },
	{ path: 'auth/login', component: AuthLoginComponent, pathMatch: 'full' },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
];
