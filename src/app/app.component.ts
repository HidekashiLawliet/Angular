import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';


@Component({
	selector: 'hinv-root',
	standalone: true,
	imports: [RoomsComponent, RouterOutlet, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'Hide Hotel';

	role ='Admin';
}
