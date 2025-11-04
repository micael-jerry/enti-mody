import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb.component';

@Component({
	selector: 'app-auth-login',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [BreadcrumbComponent],
	templateUrl: './auth-login.component.html',
	styleUrl: './auth-login.component.css',
})
export class AuthLoginComponent {}
