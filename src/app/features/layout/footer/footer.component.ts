import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-footer',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css',
	imports: [RouterLink],
})
export class FooterComponent {}
