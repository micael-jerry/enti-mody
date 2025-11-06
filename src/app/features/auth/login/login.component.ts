import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
import { AuthLoginDto } from '../../../core/dto/login.dto';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ReactiveFormsModule],
	providers: [AuthService],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css',
})
export class LoginComponent {
	private readonly router: Router = inject(Router);
	private readonly authService: AuthService = inject(AuthService);

	readonly formSubmitError: WritableSignal<string | null> = signal(null);

	readonly authForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.min(5)]),
	});

	async onAuthFormSubmit(): Promise<void> {
		this.formSubmitError.set(null);
		this.authService
			.login(this.authForm.value as AuthLoginDto)
			.then(async () => {
				await this.router.navigate(['/user/list']);
			})
			.catch(() => {
				this.formSubmitError.set('Login failed. Please check your credentials and try again.');
			});
	}

	get emailControl(): AbstractControl<string | null> | null {
		return this.authForm.get('email');
	}

	get passwordControl(): AbstractControl<string | null> | null {
		return this.authForm.get('password');
	}
}
