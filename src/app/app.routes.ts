import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthLoginComponent } from './auth/login/auth-login.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
	{
		path: 'auth',
		component: AuthComponent,
		children: [
			{ path: 'login', component: AuthLoginComponent, pathMatch: 'full' },
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
		],
	},
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
];
