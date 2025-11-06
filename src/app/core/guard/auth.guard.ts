import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { LocalStorageUtil } from '../../shared/utils/local-storage.util';
import { AUTH_TOKEN_KEY } from '../constants/auth';

export const authGuard = async (): Promise<boolean> => {
	const router: Router = inject(Router);

	const token: string | null = LocalStorageUtil.getItem(AUTH_TOKEN_KEY);
	if (!token) {
		await router.navigate([API_ENDPOINTS.auth.login]);
		return false;
	}
	return true;
};
