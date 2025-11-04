import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../layout/breadcrumb/breadcrumb.component';

@Component({
	selector: 'app-home',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	templateUrl: './home.component.html',
	imports: [BreadcrumbComponent],
})
export class HomeComponent {}
