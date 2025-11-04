import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthLoginComponent } from './auth/login/auth-login.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{
		path: 'auth',
		component: AuthComponent,
		pathMatch: 'full',
		children: [
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
			{ path: 'login', component: AuthLoginComponent, pathMatch: 'full' },
		],
	},
];
