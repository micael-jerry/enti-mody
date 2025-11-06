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
import { Role, User } from '../../../core/model/user.model';
import { UserService } from '../../../core/service/user.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-user-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [UserService],
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css',
	imports: [NgOptimizedImage],
})
export class UserListComponent implements OnInit {
	private readonly userService: UserService = inject(UserService);

	readonly fetchedUsers: WritableSignal<User[]> = signal([]);
	readonly searchQuery: WritableSignal<string> = signal('');
	readonly users: WritableSignal<User[]> = signal([]);

	readonly PAGE_SIZE = 10;
	readonly currentPage = signal(1);
	readonly totalPages = computed(() => Math.max(1, Math.ceil(this.users().length / this.PAGE_SIZE)));
	readonly pageNumbers = computed(() =>
		Array(this.totalPages())
			.fill(0)
			.map((_, i) => i + 1),
	);
	readonly usersOnCurrentPage: Signal<User[]> = computed(() => {
		const start = (this.currentPage() - 1) * this.PAGE_SIZE;
		return this.users().slice(start, start + this.PAGE_SIZE);
	});

	async ngOnInit(): Promise<void> {
		const users: User[] = await this.userService.getUsers();
		this.fetchedUsers.set(users);
		this.users.set(users);
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

	formatUserRoles(roles: Role[]): string {
		if (roles.length === 0) {
			return 'Pas de role';
		}
		return roles.map((role) => role.name).join(', ');
	}

	set page(page: number) {
		const p = Math.max(1, Math.min(this.totalPages(), page));
		this.currentPage.set(p);
	}

	nextPage(): void {
		this.page = this.currentPage() + 1;
	}

	prevPage(): void {
		this.page = this.currentPage() - 1;
	}
}
