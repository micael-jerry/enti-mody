import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	linkedSignal,
	OnInit,
	Signal,
	signal,
	WritableSignal,
} from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { User } from '../../core/model/user.model';
import { UserListComponent } from './user-list/user-list.component';
import { USER_LIST_PAGE_SIZE } from '../../core/constants/user.constants';

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
	readonly users = linkedSignal<User[]>(() => this.fetchedUsers());
	readonly totalPages = computed(() => Math.max(1, Math.ceil(this.users().length / USER_LIST_PAGE_SIZE)));
	readonly currentPage = signal(1);
	readonly usersOnCurrentPage: Signal<User[]> = computed(() => {
		const start = (this.currentPage() - 1) * USER_LIST_PAGE_SIZE;
		return this.users().slice(start, start + USER_LIST_PAGE_SIZE);
	});
	readonly searchQuery = signal<string>('');
	ngOnInit(): void {
		this.userService.getUsers().then((users: User[]) => this.fetchedUsers.set(users));
	}

	setPage(page: number): void {
		const p = Math.max(1, Math.min(this.totalPages(), page));
		this.currentPage.set(p);
	}

	onSearchQueryInput(searchQuery: string): void {
		this.searchQuery.set(searchQuery);
		this.currentPage.set(1);

		const queryIgnoreCase = searchQuery.toLocaleLowerCase();
		const filteredUsers = this.fetchedUsers().filter((user) =>
			(user.name + user.email).toLocaleLowerCase().includes(queryIgnoreCase),
		);
		this.users.set(filteredUsers);
	}
}
