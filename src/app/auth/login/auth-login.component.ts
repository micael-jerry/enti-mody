import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-auth-login',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './auth-login.component.html',
	styleUrl: './auth-login.component.css',
})
export class AuthLoginComponent {}
