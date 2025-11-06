import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { AUTH_TOKEN_REQUEST_HEADER } from '../../shared/constants';

export const tokenInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
	const authService = inject(AuthService);

	const token: string | null = authService.token;
	if (!token) {
		return next(req);
	}

	const headers = new HttpHeaders({
		[AUTH_TOKEN_REQUEST_HEADER]: token,
	});

	const newReq = req.clone({
		headers,
	});

	return next(newReq);
};
