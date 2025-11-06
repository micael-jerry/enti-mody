import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-user',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user.component.html',
	styleUrl: './user.component.css',
})
export class UserComponent {}
