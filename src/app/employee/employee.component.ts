import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
import { EmployeeService } from './employee.service';

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
