import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-breadcrumb',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
	@Input({ required: false })
	value: string | null = null;
}
