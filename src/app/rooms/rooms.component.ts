import { AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, Query, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Room, roomsList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';


@Component({
	selector: 'hinv-rooms',
	standalone: true,
	templateUrl: './rooms.component.html',
	styleUrl: './rooms.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, RouterOutlet, RoomsListComponent, HeaderComponent]
})


export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {
	// ! don't implement DoCheck and  ngOnChanges together in the same component 'cause they do the same thing

	@ViewChild(HeaderComponent) headerComponent!: HeaderComponent; //! ViewChild to see one child component else is ViewChildren
	@ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
	ngAfterViewInit(): void {
		// this.headerComponent.titleHeader = 'Rooms View';
		// console.log(` after view init header Title = to${this.headerComponent.titleHeader}`)
	}
	// * with static: true it's means this component is saved to be used in his parent component
	// ! create a new instance of this component
	// 	! so now we can acces it in here
	// ! if it workd, but just include file where the componant is
	// ! import { HeaderComponent } from "../header/header.component";
	// ! and add it in import

	roomList: roomsList[] = [];

	// roomList = new RoomsService(); // ! wrong things to do, to create a new instance
	constructor(private roomsService: RoomsService) {
		this.roomList = this.roomsService.getRooms();
	}
	// ! thanks to that our data come from the service file, and cannot be access from the DOM
	// ! Data structure should always be in a service file; a service is a reusable classe where you can put some business logic


	ngOnDestroy(): void {

	}
	ngDoCheck(): void { // ! activated when  a changes happen on the web page
		console.log('Room component doCheck');
	}
	ngOnChanges(changes: SimpleChanges): void {
		throw new Error('Method not implemented.');
	}

	ngOnInit(): void {
		console.log('ngOnInit');
	}

	selectedRoom!: roomsList
	title = 'Hide Hotel';

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

	hideAvailableRooms = true;



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
		};
	}


}

