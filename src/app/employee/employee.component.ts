import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
	selector: 'hinv-employee',
	standalone: true,
	imports: [],
	templateUrl: './employee.component.html',
	styleUrl: './employee.component.css',
	providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
	empRoll: string = "Admin";

	constructor(private EmployeeService: EmployeeService) { }
	ngOnInit(): void {

	}

}
