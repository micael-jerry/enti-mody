import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { User } from '../../core/model/user.model';
import { UserListComponent } from './user-list/user-list.component';

@Component({
	selector: 'app-user',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user.component.html',
	styleUrl: './user.component.css',
	imports: [UserListComponent],
	providers: [UserService],
})
export class UserComponent implements OnInit {
	private readonly userService: UserService = inject(UserService);

	readonly fetchedUsers: WritableSignal<User[]> = signal([]);

	ngOnInit(): void {
		this.userService.getUsers().then((users: User[]) => this.fetchedUsers.set(users));
	}
}
