import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-user',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user.component.html',
	styleUrl: './user.component.css',
	imports: [RouterOutlet],
})
export class UserComponent {}
