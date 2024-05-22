import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG } from '../AppConfig/appconfig.service';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import bootstrap from '../main.server';


@NgModule({
	declarations: [

	],
	imports: [
		AppComponent,
		RoomsComponent,
		ContainerComponent,
		RoomsListComponent,
		ContainerComponent,
		EmployeeComponent,
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
	bootstrap: [],
})
export class AppModule { }


// @NgModule({
// 	declarations: [
// 		AppComponent,
// 		RoomsComponent,
// 		RoomsListComponent,
// 		ContainerComponent,
// 		EmployeeComponent
// 	],
// 	imports: [
// 		BrowserModule,
// 		AppRoutingModule,
// 		HttpClientModule,
// 	],
// 	providers: [
// 		{
// 			provide: APP_SERVICE_CONFIG,
// 			useValue: APP_CONFIG
// 		}
// 	],
// 	bootstrap: [AppComponent],
// },)
// export class AppModule { }  