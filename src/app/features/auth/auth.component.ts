import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { LoginComponent } from './login/login.component';
import { UnderConstructionComponent } from '../../shared/components/under-construction/under-construction.component';
import { AuthLoginDto } from '../../core/dto/login.dto';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [LoginComponent, UnderConstructionComponent],
	providers: [AuthService],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.css',
})
export class AuthComponent {
	private readonly router: Router = inject(Router);
	private readonly authService: AuthService = inject(AuthService);

	readonly isLoginPage = signal<boolean>(true);
	readonly isLoading = signal<boolean>(false);
	readonly loginError = signal<string | null>(null);

	onLogin(credentials: AuthLoginDto): void {
		this.loginError.set(null);
		this.isLoading.set(true);
		this.authService
			.login(credentials)
			.then(async () => {
				await this.router.navigate(['/user/list']);
			})
			.catch((err) => {
				console.error(err);
				this.loginError.set('Login failed. Please check your credentials and try again.');
			})
			.finally(() => this.isLoading.set(false));
	}
}
