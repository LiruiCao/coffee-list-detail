import { Injectable, InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
    apiPath: string = '';
    apiPathLocal: string = '';
    contextRoot: string = '';
    logerror: string = '';
    LOGOUT_URL: string = '';
    LOGIN_URL: string = '';
}
export enum APP_ROUTES {
    UNAUTHORIZED = '/unauthorized',
    COFFEE='/coffee'
}
