import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
	selector: 'hinv-rooms',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.css'
})
export class RoomsComponent {
	hotelName = "Hide Hotel"
	rooms = [
		{
			name: "Classic room",
			price: 100
		},
		{
			name: "Forest room",
			price: 200
		},
		{
			name: "Spatial room",
			price: 300
		}
	];
	NumbsOfRooms = 3;
}


