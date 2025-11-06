import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';

@Component({
	selector: 'app-auth',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, RouterOutlet, RouterLinkActive],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
	private readonly router: Router = inject(Router);
	private readonly authService: AuthService = inject(AuthService);

	ngOnInit(): void {
		if (this.authService.isAuthenticated()) {
			this.router.navigate(['/user/list']);
		}
	}
}
