import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../layout/breadcrumb/breadcrumb.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-auth',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [BreadcrumbComponent, RouterLink, RouterOutlet],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.css',
})
export class AuthComponent {}
