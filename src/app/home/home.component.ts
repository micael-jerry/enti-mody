import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-home',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	templateUrl: './home.component.html',
})
export class HomeComponent {}
