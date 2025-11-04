import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BreadcrumbComponent } from "../layout/breadcrumb/breadcrumb.component";

@Component({
	selector: 'app-auth',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './auth.component.html',
	imports: [BreadcrumbComponent]
})
export class AuthComponent { }