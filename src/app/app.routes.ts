import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AUTH_ROUTES } from './features/auth/auth.route';
import { USER_ROUTES } from './features/user/user.route';
import { guestGuard } from './core/guard/guest.guard';

export const routes: Routes = [
	...AUTH_ROUTES,
	...USER_ROUTES,
	{ path: 'home', component: HomeComponent, canActivate: [guestGuard] },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: NotFoundComponent },
];
