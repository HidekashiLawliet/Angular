import { InjectionToken } from "@angular/core";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('AppConfig');

export interface AppConfig {
    apiEndpoint: string;
    title: string;
    baseUrl: string;
}

export const APP_CONFIG: AppConfig = {
    apiEndpoint: 'http://localhost:3000',
    title: 'Hotel Inventory App',
    baseUrl: 'http://localhost:4200'
};