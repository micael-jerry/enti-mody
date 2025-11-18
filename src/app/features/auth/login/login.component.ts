import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthLoginDto } from '../../../core/dto/login.dto';

@Component({
	selector: 'app-login',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ReactiveFormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css',
})
export class LoginComponent {
	readonly loginError = input<string | null>();
	readonly isLoading = input.required<boolean>();

	readonly loginForm = output<AuthLoginDto>();

	readonly authForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(5)]),
	});

	onAuthFormSubmit(): void {
		this.loginForm.emit(this.authForm.value as AuthLoginDto);
	}

	get emailControl(): AbstractControl<string | null> | null {
		return this.authForm.get('email');
	}

	get passwordControl(): AbstractControl<string | null> | null {
		return this.authForm.get('password');
	}
}
