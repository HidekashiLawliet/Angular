import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LoggerService } from './logger.service';


@Component({
	selector: 'hinv-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports: [RoomsComponent, RouterOutlet, CommonModule, ContainerComponent, EmployeeComponent]
})

export class AppComponent implements OnInit {
	@ViewChild('name', { static: true }) name!: ElementRef;
	ngOnInit(): void {
		this.loggerService.log(' Hello World');
	}

	// ! if loggerService is not provided, it will be skip
	constructor(@Optional() private loggerService: LoggerService) {

	}

	role = 'Admin';
	// ! load dynamically in <ng-template> 
	@ViewChild('admin', { read: ViewContainerRef }) vcr!: ViewContainerRef
	ngAfterViewInit(): void {
		// const componentRef = this.vcr.createComponent(RoomsComponent);
		// componentRef.instance.title = 'Admin View';
	}


}
