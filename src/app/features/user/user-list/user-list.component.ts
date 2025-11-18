import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { User } from '../../../core/model/user.model';
import { NgOptimizedImage } from '@angular/common';
import { formatUserRoles } from '../../../shared/utils/user.util';

@Component({
	selector: 'app-user-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css',
	imports: [NgOptimizedImage],
})
export class UserListComponent {
	readonly users = input.required<User[]>();
	readonly currentPage = input.required<number>();
	readonly totalPages = input.required<number>();

	readonly newPage = output<number>();
	readonly searchQuery = output<string>();

	readonly pageNumbers = computed(() => {
		return new Array(this.totalPages()).fill(0).map((_, i) => i + 1);
	});

	onPageChange(pageNumber: number): void {
		this.newPage.emit(pageNumber);
	}

	onSearchQueryInput(searchQuery: string): void {
		this.searchQuery.emit(searchQuery);
	}

	protected readonly formatUserRoles = formatUserRoles;
}
