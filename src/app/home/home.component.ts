import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../layout/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-home',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	templateUrl: './home.component.html',
	imports: [BreadcrumbComponent, RouterLink],
})
export class HomeComponent {}
