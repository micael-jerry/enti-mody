import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/layout/header/header.component';
import { FooterComponent } from './features/layout/footer/footer.component';
import { BreadcrumbComponent } from './features/layout/breadcrumb/breadcrumb.component';

@Component({
	selector: 'app-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './app.component.html',
	imports: [RouterOutlet, HeaderComponent, FooterComponent, BreadcrumbComponent],
})
export class AppComponent {}
