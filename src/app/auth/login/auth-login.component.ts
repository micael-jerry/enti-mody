import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-auth-login',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ReactiveFormsModule],
	templateUrl: './auth-login.component.html',
	styleUrl: './auth-login.component.css',
})
export class AuthLoginComponent {
	readonly authForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.min(5)]),
	});

	onAuthFormSubmit(): void {
		console.log(this.authForm);
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
