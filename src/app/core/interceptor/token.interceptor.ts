import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_TOKEN_KEY, AUTH_TOKEN_REQUEST_HEADER } from '../constants/auth.constants';
import { inject } from '@angular/core';
import { SessionStorageUtil } from '../../shared/utils/session-storage.util';

export const tokenInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
	const sessionStorageUtil = inject(SessionStorageUtil);
	const token: string | null = sessionStorageUtil.getItem(AUTH_TOKEN_KEY);

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
