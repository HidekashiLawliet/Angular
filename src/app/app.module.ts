import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { APP_CONFIG } from '../AppConfig/appconfig.service';

@NgModule({
	declarations: [
		AppComponent,
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
	bootstrap: [HttpClient],
},)
export class AppModule { }  