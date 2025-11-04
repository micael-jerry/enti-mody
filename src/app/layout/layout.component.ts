import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-layout',
	standalone: true,
	templateUrl: './layout.component.html',
	imports: [RouterOutlet],
})
export class LayoutComponent {}
