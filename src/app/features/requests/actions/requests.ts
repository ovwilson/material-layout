import { Action } from '@ngrx/store';
import { Request } from './../models/request';
import { Setting } from './../../settings/models/setting';

export const REQUESTS_RECEIVE = '[Requests] Receive';
export const REQUESTS_RECEIVE_SETTINGS = '[Requests] Receive Settings';
export const REQUEST_RECEIVE = '[Request] Receive';
export const REQUEST_RECEIVE_SETTING = '[Request] Receive Setting';
export const REQUESTS_SET_SETTINGIDS = '[Request] Set Settings Ids';

export const REQUESTS_RESET = '[Requests] Reset';

export class RequestsReceive implements Action {
    readonly type = REQUESTS_RECEIVE;
    constructor(public payload: Request[]) { }
}

export class RequestsSetSettingsIds implements Action {
    readonly type = REQUESTS_SET_SETTINGIDS;
    constructor(public payload: string) { }
}

export class RequestReceive implements Action {
    readonly type = REQUEST_RECEIVE;
    constructor(public payload: Request) { }
}

export class RequestReceiveSetting implements Action {
    readonly type = REQUEST_RECEIVE_SETTING;
    constructor(public payload: Setting) { }
}

export class RequestsReceiveSettings implements Action {
    readonly type = REQUESTS_RECEIVE_SETTINGS;
    constructor(public payload: Setting[]) { }
}

export class RequestsReset implements Action {
    readonly type = REQUESTS_RESET;
    constructor(public payload: any) { }
}
export type All = RequestsReceive
    | RequestReceive
    | RequestsReceiveSettings
    | RequestReceiveSetting
    | RequestsSetSettingsIds
    | RequestsReset;
