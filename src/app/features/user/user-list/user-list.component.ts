import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { User } from '../../../core/model/user.model';
import { NgOptimizedImage } from '@angular/common';
import { UserProfileDialogComponent } from '../user-profile-dialog/user-profile-dialog.component';
import { FormatUserRolePipe } from '../../../core/pipe/format-user-role.pipe';

@Component({
	selector: 'app-user-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css',
	imports: [NgOptimizedImage, UserProfileDialogComponent, FormatUserRolePipe],
})
export class UserListComponent {
	// TODO: mettre un skeleton spécifique pour les donner fetcher, (pas de skeleton general si on utilise la pagination du backend)
	readonly users = input.required<User[]>();
	readonly currentPage = input.required<number>();
	readonly totalPages = input.required<number>();

	readonly newPage = output<number>();
	readonly searchQuery = output<string>();

	readonly pageNumbers = computed(() => {
		return new Array(this.totalPages()).fill(0).map((_, i) => i + 1);
	});

	readonly userDialogOpen = signal(false);
	readonly selectedUser = signal<User | null>(null);

	onSelectedUser(user: User): void {
		this.selectedUser.set(user);
		this.userDialogOpen.set(true);
	}

	onPageChange(pageNumber: number): void {
		this.newPage.emit(pageNumber);
	}

	onSearchQueryInput(searchQuery: string): void {
		this.searchQuery.emit(searchQuery);
	}
}
