import { Role } from '../../core/model/user.model';

export function formatUserRoles(roles: Role[]): string {
	if (roles.length === 0) {
		return 'Pas de role';
	}
	return roles.map((role) => role.name).join(', ');
}
