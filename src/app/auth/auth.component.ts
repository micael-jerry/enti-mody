import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-auth',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, RouterOutlet, RouterLinkActive],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.css',
})
export class AuthComponent {}
