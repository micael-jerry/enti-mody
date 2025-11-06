import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthLoginDto, AuthLoginResponse } from '../dto/login.dto';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class AuthService {
	private http = inject(HttpClient);

	login(credentials: AuthLoginDto): Promise<AuthLoginResponse> {
		const loginResponse$: Observable<AuthLoginResponse> = this.http.post<AuthLoginResponse>(
			`${environment.apiUrl}/login`,
			credentials,
		);
		return lastValueFrom(loginResponse$);
	}
}
