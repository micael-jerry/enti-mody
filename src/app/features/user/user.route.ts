import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { authGuard } from '../../core/guard/auth.guard';

export const USER_ROUTES: Routes = [
	{
		path: 'user',
		component: UserComponent,
		canActivate: [authGuard],
		children: [{ path: 'list', component: UserListComponent }],
	},
];
