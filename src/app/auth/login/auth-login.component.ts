import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb.component';

@Component({
	selector: 'app-auth-login',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './auth-login.component.html',
	imports: [BreadcrumbComponent],
})
export class AuthLoginComponent {}
