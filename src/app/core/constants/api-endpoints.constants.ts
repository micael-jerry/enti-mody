import { environment } from '../../../environments/environment';

export const API_ENDPOINTS = {
	auth: {
		login: `${environment.apiUrl}/login`,
	},
	user: {
		list: `${environment.apiUrl}/users?type=all`,
	},
};
