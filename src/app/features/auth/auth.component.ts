import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { LoginComponent } from './login/login.component';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';

@Component({
	selector: 'app-auth',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [LoginComponent, UnderConstructionComponent],
	providers: [AuthService],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.css',
})
export class AuthComponent {
	readonly isLoginPage = signal<boolean>(true);
}
