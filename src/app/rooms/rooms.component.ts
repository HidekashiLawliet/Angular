import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Room } from './rooms';

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
	
	hideAvailableRooms = true;

    roomsDisponibility : Room = {
		totalRooms: 3,
        availableRooms: 2,
        bookedRooms: 1,
    };

	toggle() {
		this.hideAvailableRooms = !this.hideAvailableRooms;
	}
}


