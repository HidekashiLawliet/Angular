import { InjectionToken } from "@angular/core";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('AppConfig');

export interface AppConfig {
    apiEndpoint: string;
    title: string;
}

export const APP_CONFIG: AppConfig = {
    apiEndpoint: 'http://localhost:4200',
    title: 'Hotel Inventory App',
};