import {
	ChangeDetectionStrategy,
	Component,
	computed,
	input,
	linkedSignal,
	Signal,
	signal,
	WritableSignal,
} from '@angular/core';
import { User } from '../../../core/model/user.model';
import { NgOptimizedImage } from '@angular/common';
import { USER_LIST_PAGE_SIZE } from '../../../core/constants/user.constants';
import { formatUserRoles } from '../../../shared/utils/user.util';

@Component({
	selector: 'app-user-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css',
	imports: [NgOptimizedImage],
})
export class UserListComponent {
	readonly fetchedUsers = input<User[]>([]);

	readonly formatUserRoles = formatUserRoles;

	readonly searchQuery: WritableSignal<string> = signal('');
	readonly users: WritableSignal<User[]> = linkedSignal(() => this.fetchedUsers());

	readonly currentPage = signal(1);
	readonly totalPages = computed(() => Math.max(1, Math.ceil(this.users().length / USER_LIST_PAGE_SIZE)));
	readonly pageNumbers = computed(() =>
		Array(this.totalPages())
			.fill(0)
			.map((_, i) => i + 1),
	);
	readonly usersOnCurrentPage: Signal<User[]> = computed(() => {
		const start = (this.currentPage() - 1) * USER_LIST_PAGE_SIZE;
		return this.users().slice(start, start + USER_LIST_PAGE_SIZE);
	});

	onSearchQueryInput(searchQuery: string): void {
		this.searchQuery.set(searchQuery);
		this.currentPage.set(1);

		const queryIgnoreCase = searchQuery.toLocaleLowerCase();
		const filteredUsers = this.fetchedUsers().filter((user) =>
			(user.name + user.email).toLocaleLowerCase().includes(queryIgnoreCase),
		);
		this.users.set(filteredUsers);
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
