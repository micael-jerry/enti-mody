import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
import { AuthLoginDto } from '../../../core/dto/login.dto';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ReactiveFormsModule],
	providers: [AuthService],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css',
})
export class LoginComponent {
	private readonly router: Router = inject(Router);
	private readonly authService: AuthService = inject(AuthService);

	readonly authForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.min(5)]),
	});

	async onAuthFormSubmit(): Promise<void> {
		await this.authService.login(this.authForm.value as AuthLoginDto);
		await this.router.navigate(['/user/list']);
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
