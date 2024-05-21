import { Component, OnInit, Self, SkipSelf } from '@angular/core';
import { EmployeeService } from './employee.service';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
	selector: 'hinv-employee',
	standalone: true,
	imports: [],
	templateUrl: './employee.component.html',
	styleUrl: './employee.component.css',
	providers: [RoomsService, EmployeeComponent, EmployeeService],
})

export class EmployeeComponent implements OnInit {
	empRoll: string = "Admin";

	constructor(@Self() private EmployeeService: EmployeeService) {

	}
	ngOnInit(): void {

	}

}
