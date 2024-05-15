import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Room, roomsList } from '../rooms';

@Component({
	selector: 'hinv-rooms-list',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './rooms-list.component.html',
	styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent implements OnInit {
	@Input() rooms: roomsList[] = [];
	@Output() selectedRoom = new EventEmitter<roomsList>();

	ngOnInit(): void { }

	selectRoom(room: roomsList) {
		this.selectedRoom.emit(room);
	}

}