import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class RoomsListComponent implements OnInit, OnChanges {
	ngOnChanges(changes: SimpleChanges): void {
		console.log("try");
	}
	selectRoom(room: roomsList) {
		this.selectedRoom.emit(room);
	}
	@Input() rooms: roomsList[] = [];
	@Output() selectedRoom = new EventEmitter<roomsList>();

	ngOnInit(): void { }


}
