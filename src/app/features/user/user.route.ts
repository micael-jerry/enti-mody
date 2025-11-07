import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { authGuard } from '../../core/guard/auth.guard';

export const USER_ROUTES: Routes = [
	{
		path: 'user/list',
		component: UserComponent,
		canActivate: [authGuard],
	},
];
