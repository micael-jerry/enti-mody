import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AUTH_ROUTES } from './features/auth/auth.route';
import { USER_ROUTES } from './features/user/user.route';

export const routes: Routes = [
	...AUTH_ROUTES,
	...USER_ROUTES,
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: NotFoundComponent },
];
