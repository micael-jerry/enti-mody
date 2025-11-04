import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-breadcrumb',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
	private readonly router = inject(Router);
	value: string = this.router.url;
}
