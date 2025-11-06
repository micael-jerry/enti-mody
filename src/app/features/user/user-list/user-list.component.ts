import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-user-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css',
})
export class UserListComponent {}
