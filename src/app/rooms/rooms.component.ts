import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Room, roomsList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
	selector: 'hinv-rooms',
	standalone: true,
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush, // !!!!! NEED THAT TO CHANGE VALUE AND OPTIMIZE CHANGING ELEMENT FROM CHILD TO PARENT
	imports: [CommonModule, RouterOutlet, RoomsListComponent]
})


export class RoomsComponent implements OnInit {

	ngOnInit(): void {
	}

	selectedRoom!: roomsList

	selectRoom(room: roomsList) {
		if (room.available === false) {
			window.alert('There is no more room available with this option');
		} else {
			room.available = false;
			console.log(room.themes + ' \nnumber of rooms available: ' + this.roomList.length);
		}
		this.roomsDisponibility.availableRooms = this.roomList.length - 1;
		if (this.hideAvailableRooms === false) {
			this.hideAvailableRooms = true;
		}
	}



	hotelName = 'Hide Hotel';
	hideAvailableRooms = true;
	randomNumber = 17871263987;

	roomList: roomsList[] = [
		{
			available: true,
			roomName: 'Voyager One room',
			amenities: 'Air conditionner, Free Wi-fi, parking spot, TV, Bathroom, spa',
			price: 10000,
			themes: 'Space',
			photos: 'https://i.pinimg.com/originals/b2/ab/ea/b2abea19989a0694c54c8899023cf3a9.jpg',
			checkInTime: new Date('11-November-2021'),
			checkOutTime: new Date('11-december-2022'),
			rating: 4.826326324,
		},
		{
			available: true,
			roomName: 'Forest room',
			amenities: 'Air conditionner, parking spot, Bathroom, spa, swimming pool',
			price: 10200,
			themes: 'Forest',
			photos: 'https://www.hotels2see.com/sites/default/files/images/rustic-style-luxury-accommodation-hotel-nothofagus-chile.jpg',
			checkInTime: new Date('11-November-2021'),
			checkOutTime: new Date('11-december-2022'),
			rating: 5,
		},
		{
			available: true,
			roomName: 'Underground room',
			amenities: 'Air conditionner, Free Wi-fi (optical fiber), TV, parking spot, TV, Bathroom, jet tub, gym, gym room',
			price: 10500,
			themes: 'Underground',
			photos: 'https://i.ytimg.com/vi/uwLQhnyc3Mc/maxresdefault.jpg',
			checkInTime: new Date('11-November-2021'),
			checkOutTime: new Date('11-december-2022'),
			rating: 4.52312351325,
		},
	];

	totalOfAvailableRoom = this.roomList.length;

	AvailableRoomCounter(roomList: roomsList[]): number {
		let index = 0;
		for (const room of roomList) {
			if (room.available == true) {
				index += 1;
			}
		}
		return index;
	};


	toggle() {
		this.hideAvailableRooms = !this.hideAvailableRooms;
		this.roomsDisponibility.availableRooms = this.AvailableRoomCounter(this.roomList);
	}

	roomsDisponibility: Room = {
		totalRooms: 3,
		bookedRooms: 0,
		availableRooms: 3,
	};
	addRoom() {
		const newRoom: roomsList = {
			available: true,
			roomName: 'Cyberpunk room',
			amenities: 'Air conditionner, Free Wi-fi, parking spot, TV, Bathroom, spa',
			price: 10000,
			themes: 'Space',
			photos: 'https://i.pinimg.com/originals/b2/ab/ea/b2abea19989a0694c54c8899023cf3a9.jpg',
			checkInTime: new Date('11-November-2021'),
			checkOutTime: new Date('11-december-2022'),
			rating: 5,
		};
		// this.roomList.push(newRoom);
		this.roomList = [...this.roomList, newRoom];

		if (this.hideAvailableRooms === false) {
			this.hideAvailableRooms = true;
		}
	}
}
