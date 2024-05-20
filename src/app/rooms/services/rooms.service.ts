import { Injectable } from '@angular/core';
import { roomsList } from '../rooms';

@Injectable({
	providedIn: 'root'
})
export class RoomsService {
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

	constructor() {
		console.log('RoomsService is created');
	}

	getRooms() {
		return this.roomList;
	}

}
