import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';

@Component({
	selector: 'app-auth',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, RouterOutlet, RouterLinkActive],
	providers: [AuthService],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.css',
})
export class AuthComponent {}
