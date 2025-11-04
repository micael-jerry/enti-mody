import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-breadcrumb',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
	title = 'login/Register';
}
