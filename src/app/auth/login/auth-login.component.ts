import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-auth-login",
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./auth-login.component.html",
})
export class AuthLoginComponent { }