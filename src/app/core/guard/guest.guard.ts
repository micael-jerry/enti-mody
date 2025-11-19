import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_TOKEN_KEY } from '../constants/auth.constants';
import { SessionStorageUtil } from '../../shared/utils/session-storage.util';

export const guestGuard = async (): Promise<boolean> => {
	const router: Router = inject(Router);
	const sessionStorageUtil = inject(SessionStorageUtil);

	const token: string | null = sessionStorageUtil.getItem(AUTH_TOKEN_KEY);
	if (token) {
		await router.navigate(['/user/list']);
		return false;
	}
	return true;
};
