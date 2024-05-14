import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Room, roomsList } from './rooms';

@Component({
	selector: 'hinv-rooms',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.css',
})


export class RoomsComponent implements OnInit {
	ngOnInit(): void {}
	hotelName = 'Hide Hotel';
	hideAvailableRooms = true;
	randomNumber = 17871263987;

	roomList: roomsList[] = [
    	{
			booked: 2,
			numberOfRooms: 3,
			roomName: 'Voyager One room',
			amenities:'Air conditionner, Free Wi-fi, parking spot, TV, Bathroom, spa',
			price: 10000,
			themes: 'Space',
			photos:'https://i.pinimg.com/originals/b2/ab/ea/b2abea19989a0694c54c8899023cf3a9.jpg',
			checkInTime: new Date('11-November-2021'),
			checkOutTime: new Date('11-december-2022'),
			rating: 4.826326324,
		},
		{
			booked: 2,
			numberOfRooms: 3,
			roomName: 'Forest room',
			amenities:'Air conditionner, parking spot, Bathroom, spa, swimming pool',
			price: 10200,
			themes: 'Forest',
			photos: 'https://www.hotels2see.com/sites/default/files/images/rustic-style-luxury-accommodation-hotel-nothofagus-chile.jpg',
			checkInTime: new Date('11-November-2021'),
			checkOutTime: new Date('11-december-2022'),
			rating: 5,
		},
		{
			booked: 2,
			numberOfRooms: 3,
			roomName: 'Underground room',
			amenities:'Air conditionner, Free Wi-fi (optical fiber), TV, parking spot, TV, Bathroom, jet tub, gym, gym room',
			price: 10500,
			themes: 'Underground',
			photos:'https://i.ytimg.com/vi/uwLQhnyc3Mc/maxresdefault.jpg',
			checkInTime: new Date('11-November-2021'),
			checkOutTime: new Date('11-december-2022'),
			rating: 4.52312351325,
		},
	];


	roomsDisponibility: Room = {
		totalRooms: 9,
		bookedRooms: 6,
		availableRooms: 3,
	};

	toggle() {
    this.hideAvailableRooms = !this.hideAvailableRooms;
	}
}
