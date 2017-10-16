import { Action } from '@ngrx/store';
import { Setting} from './../models/setting';

export const SETTINGS_GET = '[Settings] Get';
export const SETTINGS_RECEIVE = '[Settings] Receive';

export const SETTING_GET = '[Setting] Get';
export const SETTING_CREATE = '[Setting] Create';
export const SETTING_UPDATE = '[Setting] Update';
export const SETTING_REMOVE = '[Setting] Remmove';
export const SETTINGS_RESET = '[Settings] Reset';

export class SettingsGet implements Action {
    readonly type = SETTINGS_GET;
    constructor(public payload: any) { }
}

export class SettingsReceive implements Action {
    readonly type = SETTINGS_RECEIVE;
    constructor(public payload: Setting[]) { }
}

export class SettingsReset implements Action {
    readonly type = SETTINGS_RESET;
    constructor(public payload: any) { }
}

export type All  = SettingsGet
    | SettingsReceive
    | SettingsReset;
