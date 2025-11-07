import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { LocalStorageUtil } from '../../shared/utils/local-storage.util';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';
import { AUTH_TOKEN_KEY } from '../constants/auth.constants';
import { AuthLoginDto, AuthLoginResponse } from '../dto/login.dto';

@Injectable()
export class AuthService {
	private http = inject(HttpClient);

	async login(credentials: AuthLoginDto): Promise<AuthLoginResponse> {
		const loginResponse$: Observable<AuthLoginResponse> = this.http.post<AuthLoginResponse>(
			API_ENDPOINTS.auth.login,
			credentials,
		);
		const loginResponse: AuthLoginResponse = await lastValueFrom(loginResponse$);
		LocalStorageUtil.setItem(AUTH_TOKEN_KEY, loginResponse.token);
		return loginResponse;
	}

	logout(): void {
		LocalStorageUtil.removeItem(AUTH_TOKEN_KEY);
	}

	get token(): string | null {
		return LocalStorageUtil.getItem(AUTH_TOKEN_KEY);
	}
}
