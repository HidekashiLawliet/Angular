import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from "./container/container.component";


@Component({
	selector: 'hinv-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports: [RoomsComponent, RouterOutlet, CommonModule, ContainerComponent]
})

export class AppComponent implements OnInit {
	@ViewChild('name', { static: true }) name!: ElementRef;
	ngOnInit(): void {
		this.name.nativeElement.innerText = 'Hello World';
	}

	role = 'Admin';
	// ! load dynamically in <ng-template> 
	// @ViewChild('admin', { read: ViewContainerRef }) vcr!: ViewContainerRef
	// ngAfterViewInit(): void {
	// 	const componentRef = this.vcr.createComponent(RoomsComponent);
	// 	componentRef.instance.title = 'Admin View';
	// }


}
