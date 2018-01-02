import { Action } from '@ngrx/store';
import { Setting} from './../models/setting';

export const SETTINGS_GET = '[Settings] Get';
export const SETTINGS_RECEIVE = '[Settings] Receive';
export const SETTINGS_RECEIVE_BODY = '[Settings] Receive Body';
export const SETTINGS_RECEIVE_HEADERS = '[Settings] Receive Headers';
export const SETTINGS_RECEIVE_PARAMS = '[Settings] Receive Params';

export const SETTING_RECEIVE = '[Setting] Receive';

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

export class SettingsReceiveBody implements Action {
    readonly type = SETTINGS_RECEIVE_BODY;
    constructor(public payload: Setting[]) { }
}

export class SettingsReceiveHeaders implements Action {
    readonly type = SETTINGS_RECEIVE_HEADERS;
    constructor(public payload: Setting[]) { }
}

export class SettingsReceiveParams implements Action {
    readonly type = SETTINGS_RECEIVE_PARAMS;
    constructor(public payload: Setting[]) { }
}
export class SettingReceive implements Action {
    readonly type = SETTING_RECEIVE;
    constructor(public payload: Setting) { }
}

export class SettingsReset implements Action {
    readonly type = SETTINGS_RESET;
    constructor(public payload: any) { }
}

export type All  = SettingsGet
    | SettingsReceive
    | SettingsReceiveBody
    | SettingsReceiveHeaders
    | SettingsReceiveParams
    | SettingReceive
    | SettingsReset;
