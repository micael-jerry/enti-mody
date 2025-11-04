import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './header.component.html',
 imports: [RouterLink, NgOptimizedImage],
})
export class HeaderComponent {}
