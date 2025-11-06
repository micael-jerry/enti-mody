import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-home',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './home.component.html',
	imports: [RouterLink],
})
export class HomeComponent {}
