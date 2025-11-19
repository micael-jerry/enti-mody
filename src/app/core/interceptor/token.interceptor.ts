import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AUTH_TOKEN_KEY, AUTH_TOKEN_REQUEST_HEADER } from '../constants/auth.constants';
import { inject } from '@angular/core';
import { SessionStorageUtil } from '../../shared/utils/session-storage.util';
import { JwtUtil } from '../../shared/utils/jwt.util';
import { Router } from '@angular/router';

export const tokenInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
	const sessionStorageUtil = inject(SessionStorageUtil);
	const jwtUtil = inject(JwtUtil);
	const router = inject(Router);

	const token: string | null = sessionStorageUtil.getItem(AUTH_TOKEN_KEY);

	if (!token) {
		return next(req);
	}

	if (jwtUtil.isExpiredToken(token)) {
		sessionStorageUtil.removeItem(AUTH_TOKEN_KEY);
		router.navigate(['/auth']).catch((err: unknown) => throwError(() => err));
		return throwError(() => new Error('Token expired'));
	}

	const newReq = req.clone({
		setHeaders: {
			[AUTH_TOKEN_REQUEST_HEADER]: token,
		},
	});

	return next(newReq);
};
