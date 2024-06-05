
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG, APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
	declarations: [
		RoomsComponent,
		RoomsListComponent,
		ContainerComponent,
		EmployeeComponent,
		AppRoutingModule
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [
		{
			provide: APP_SERVICE_CONFIG,
			useValue: APP_CONFIG
		}
	],
	bootstrap: [AppComponent],
})
export class AppModule { }