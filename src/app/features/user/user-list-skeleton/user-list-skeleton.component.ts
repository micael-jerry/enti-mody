import { ChangeDetectionStrategy, Component } from '@angular/core';
import { USER_LIST_PAGE_SIZE } from '../../../core/constants/user.constants';

@Component({
	selector: 'app-user-list-skeleton',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-list-skeleton.component.html',
	styleUrls: ['./user-list-skeleton.component.css', '../user-list/user-list.component.css'],
})
export class UserListSkeletonComponent {
	get arrayToEach(): number[] {
		return new Array(USER_LIST_PAGE_SIZE).fill(0);
	}
}
