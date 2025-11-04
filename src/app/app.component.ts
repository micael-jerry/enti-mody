import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
	selector: 'app-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './app.component.html',
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {}
