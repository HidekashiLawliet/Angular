import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
	selector: 'hinv-container',
	standalone: true,
	imports: [],
	templateUrl: './container.component.html',
	styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit, AfterContentInit {
	constructor() { }

	ngOnInit(): void {

	}

	@ContentChild(EmployeeComponent,) employee!: EmployeeComponent;

	ngAfterContentInit(): void {
		console.log(this.employee)
	}
}
