import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { guestGuard } from '../../core/guard/guest.guard';

export const AUTH_ROUTES: Routes = [
	{
		path: 'auth',
		component: AuthComponent,
		canActivate: [guestGuard],
	},
];
