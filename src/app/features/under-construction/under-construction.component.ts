import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-under-construction',
	standalone: true,
	imports: [RouterLink],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './under-construction.component.html',
	styleUrls: ['./under-construction.component.css'],
})
export class UnderConstructionComponent {}
