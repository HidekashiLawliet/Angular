import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'hinv-header',
	standalone: true,
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
	constructor() {

	}
	titleHeader: string = 'header  title';
	ngOnInit(): void {

	}
}
