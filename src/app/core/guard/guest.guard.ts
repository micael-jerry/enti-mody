import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtil } from '../../shared/utils/local-storage.util';
import { AUTH_TOKEN_KEY } from '../constants/auth.constants';

export const guestGuard = async (): Promise<boolean> => {
	const router: Router = inject(Router);

	const token: string | null = LocalStorageUtil.getItem(AUTH_TOKEN_KEY);
	if (token) {
		await router.navigate(['/user/list']);
		return false;
	}
	return true;
};
