import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './header.component.html',
	imports: [RouterLink],
})
export class HeaderComponent {}
