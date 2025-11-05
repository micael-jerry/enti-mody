import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthLoginModel, AuthLoginResponse } from '../model/auth-login.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
	private http = inject(HttpClient);

	login(credentials: AuthLoginModel): Observable<AuthLoginResponse> {
		return this.http.post<AuthLoginResponse>(`${environment.apiUrl}/login`, credentials);
	}
}
