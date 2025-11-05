import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/service/auth.service';
import { AuthLoginModel } from '../../shared/model/auth-login.model';

@Component({
	selector: 'app-auth-login',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ReactiveFormsModule],
	providers: [AuthService],
	templateUrl: './auth-login.component.html',
	styleUrl: './auth-login.component.css',
})
export class AuthLoginComponent {
	private readonly authService: AuthService = inject(AuthService);
	readonly authForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.min(5)]),
	});

	onAuthFormSubmit(): void {
		this.authService.login(this.authForm.value as AuthLoginModel).subscribe((response) => {
			console.log(response);
		});
	}

	getAuthFormError(): { email: string[]; password: string[] } {
		const errors: { email: string[]; password: string[] } = { email: [], password: [] };
		const emailFormControl = this.authForm.get('email') as FormControl;
		const passwordFormControl = this.authForm.get('password') as FormControl;

		if (emailFormControl.hasError('required')) {
			errors.email.push('Email is required');
		}
		if (emailFormControl.hasError('email')) {
			errors.email.push('Email is invalid');
		}
		if (passwordFormControl.hasError('required')) {
			errors.password.push('Password is required');
		}
		if (passwordFormControl.hasError('min')) {
			errors.password.push('Password must be at least 5 characters long');
		}

		return errors;
	}
}
