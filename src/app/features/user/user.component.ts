import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	OnInit,
	Signal,
	signal,
	WritableSignal,
} from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { User } from '../../core/model/user.model';
import { UserListComponent } from './user-list/user-list.component';
import { USER_LIST_PAGE_SIZE } from '../../core/constants/user.constants';
import { UserListSkeletonComponent } from './user-list-skeleton/user-list-skeleton.component';

@Component({
	selector: 'app-user',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user.component.html',
	styleUrl: './user.component.css',
	imports: [UserListComponent, UserListSkeletonComponent],
	providers: [UserService],
})
export class UserComponent implements OnInit {
	private readonly userService: UserService = inject(UserService);

	private readonly fetchedUsers: WritableSignal<User[]> = signal([]);
	readonly isLoading = signal<boolean>(false);
	readonly currentPage = signal(1);
	readonly searchQuery = signal<string>('');

	readonly filteredUsers = computed<User[]>(() => {
		const queryIgnoreCase = this.searchQuery().toLocaleLowerCase();
		if (!queryIgnoreCase) {
			return this.fetchedUsers();
		}
		return this.fetchedUsers().filter((user) => {
			return (user.name + user.email).toLocaleLowerCase().includes(queryIgnoreCase);
		});
	});
	readonly totalPages = computed(() => Math.max(1, Math.ceil(this.filteredUsers().length / USER_LIST_PAGE_SIZE)));
	readonly usersOnCurrentPage: Signal<User[]> = computed(() => {
		const start = (this.currentPage() - 1) * USER_LIST_PAGE_SIZE;
		return this.filteredUsers().slice(start, start + USER_LIST_PAGE_SIZE);
	});

	ngOnInit(): void {
		this.isLoading.set(true);
		this.userService
			.getUsers()
			.then((users: User[]) => this.fetchedUsers.set(users))
			.finally(() => this.isLoading.set(false));
	}

	setPage(page: number): void {
		const p = Math.max(1, Math.min(this.totalPages(), page));
		this.currentPage.set(p);
	}

	onSearchQueryInput(searchQuery: string): void {
		this.searchQuery.set(searchQuery);
		this.currentPage.set(1);
	}
}
