import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../model/user.model';

@Pipe({
	name: 'formatUserRole',
	pure: false,
})
export class FormatUserRolePipe implements PipeTransform {
	transform(roles: Role[]): string {
		if (roles.length === 0) {
			return '_';
		}
		return roles.map((role: Role) => role.name).join(', ');
	}
}
