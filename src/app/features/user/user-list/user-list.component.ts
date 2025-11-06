import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../../core/service/user.service';
import { User } from '../../../core/model/user.model';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'app-user-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [JsonPipe],
	providers: [UserService],
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
	private readonly userService: UserService = inject(UserService);

	readonly users: WritableSignal<User[]> = signal([]);

	async ngOnInit(): Promise<void> {
		const users: User[] = await this.userService.getUsers();
		this.users.set(users);
	}
}
