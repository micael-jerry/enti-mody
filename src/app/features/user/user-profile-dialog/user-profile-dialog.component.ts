import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { User } from '../../../core/model/user.model';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormatUserRolePipe } from '../../../core/pipe/format-user-role.pipe';
import { FormatUserCompaniesPipe } from '../../../core/pipe/format-user-companies.pipe';

@Component({
	selector: 'app-user-profile-dialog',
	standalone: true,
	imports: [CommonModule, DialogComponent, NgOptimizedImage, FormatUserRolePipe, FormatUserCompaniesPipe],
	templateUrl: './user-profile-dialog.component.html',
	styleUrl: './user-profile-dialog.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileDialogComponent {
	readonly user = input.required<User | null>();
	readonly open = input.required<boolean>();
	readonly openChange = output<boolean>();

	onOpenChange(isOpen: boolean): void {
		this.openChange.emit(isOpen);
	}
}
