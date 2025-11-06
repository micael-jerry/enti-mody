import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';

export const AUTH_ROUTES: Routes = [
	{
		path: 'auth',
		component: AuthComponent,
		children: [
			{ path: 'login', component: LoginComponent, pathMatch: 'full' },
			{ path: 'register', component: UnderConstructionComponent, pathMatch: 'full' },
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
		],
	},
];
