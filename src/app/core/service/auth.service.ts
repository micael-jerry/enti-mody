import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthLoginDto, AuthLoginResponse } from '../dto/login.dto';

@Injectable()
export class AuthService {
	private http = inject(HttpClient);

	login(credentials: AuthLoginDto): Observable<AuthLoginResponse> {
		return this.http.post<AuthLoginResponse>(`${environment.apiUrl}/login`, credentials);
	}
}
