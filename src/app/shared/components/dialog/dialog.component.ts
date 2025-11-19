import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';

@Component({
	selector: 'app-dialog',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './dialog.component.html',
	styleUrl: './dialog.component.css',
})
export class DialogComponent {
	readonly open = input<boolean>(false);
	readonly class = input<string>('');

	readonly openChange = output<boolean>();

	onOpenChange(open: boolean): void {
		this.openChange.emit(open);
	}

	@HostListener('window:keydown.esc', ['$event'])
	handleKeyEsc(event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			this.onOpenChange(false);
		}
	}
}
