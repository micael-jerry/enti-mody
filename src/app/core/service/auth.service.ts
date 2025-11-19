import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../constants/api-endpoints.constants';
import { AUTH_TOKEN_KEY } from '../constants/auth.constants';
import { AuthLoginDto, AuthLoginResponse } from '../dto/login.dto';
import { SessionStorageUtil } from '../../shared/utils/session-storage.util';

@Injectable()
export class AuthService {
	private readonly http = inject(HttpClient);
	private readonly sessionStorageUtil = inject(SessionStorageUtil);

	async login(credentials: AuthLoginDto): Promise<AuthLoginResponse> {
		const loginResponse$: Observable<AuthLoginResponse> = this.http.post<AuthLoginResponse>(
			API_ENDPOINTS.auth.login,
			credentials,
		);
		const loginResponse: AuthLoginResponse = await lastValueFrom(loginResponse$);
		this.sessionStorageUtil.setItem(AUTH_TOKEN_KEY, loginResponse.token);
		return loginResponse;
	}
}
