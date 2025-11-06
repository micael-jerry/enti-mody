import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageUtil } from '../../shared/utils/local-storage.util';
import { AUTH_TOKEN_KEY, AUTH_TOKEN_REQUEST_HEADER } from '../constants/auth';

export const tokenInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
	const token: string | null = LocalStorageUtil.getItem(AUTH_TOKEN_KEY);

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
