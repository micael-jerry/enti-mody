import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthLoginDto, AuthLoginResponse } from '../dto/login.dto';
import { lastValueFrom, Observable } from 'rxjs';
import { LocalStorageUtil } from '../../shared/utils/local-storage.util';
import { AUTH_TOKEN_KEY } from '../../shared/constants';

@Injectable()
export class AuthService {
	private http = inject(HttpClient);

	async login(credentials: AuthLoginDto): Promise<AuthLoginResponse> {
		const loginResponse$: Observable<AuthLoginResponse> = this.http.post<AuthLoginResponse>(
			`${environment.apiUrl}/login`,
			credentials,
		);
		const loginResponse: AuthLoginResponse = await lastValueFrom(loginResponse$);
		LocalStorageUtil.setItem(AUTH_TOKEN_KEY, loginResponse.token);
		return loginResponse;
	}

	isAuthenticated(): boolean {
		return LocalStorageUtil.getItem(AUTH_TOKEN_KEY) !== null;
	}
}
