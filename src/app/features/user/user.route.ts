import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';

export const USER_ROUTES: Routes = [
	{
		path: 'user',
		component: UserComponent,
		children: [{ path: 'list', component: UserListComponent }],
	},
];
