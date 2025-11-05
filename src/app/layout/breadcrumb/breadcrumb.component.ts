import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Event, Router, RouterEvent, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

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
	readonly pathArray = signal(this.getPathArray(this.router.url));

	constructor() {
		this.router.events
			.pipe(filter((e: Event | RouterEvent) => e instanceof RouterEvent))
			.subscribe((e: RouterEvent) => {
				this.pathArray.set(this.getPathArray(e.url));
			});
	}

	private getPathArray(url: string): string[] {
		return url.split('/').filter((path) => path.length > 0);
	}
}
