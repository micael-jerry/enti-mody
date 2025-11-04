import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
	selector: 'app-breadcrumb',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
	templateUrl: './breadcrumb.component.html',
	styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
	private readonly router = inject(Router);
	pathArray: string[] = this.getPathArray(this.router.url);

	private getPathArray(url: string): string[] {
		return url.split('/').filter((path) => path.length > 0);
	}
}
