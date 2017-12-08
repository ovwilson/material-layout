import { Action } from '@ngrx/store';
import { SPRequest } from './../models/request';

export const REQUESTS_RECEIVE = '[Requests] Receive';
export const REQUEST_RECEIVE = '[Request] Receive';
export const HEADERS_RECEIVE = '[Headers] Receive';
export const PARAMS_RECEIVE = '[Params] Receive';
export const BODIES_RECEIVE = '[Bodies] Receive';
export const KEYWORDS_RECEIVE = '[Keywords] Receive';

export class RequestsReceive implements Action {
    readonly type = REQUESTS_RECEIVE;
    constructor(public payload: SPRequest[]) { }
}

export class RequestReceive implements Action {
    readonly type = REQUEST_RECEIVE;
    constructor(public payload: SPRequest) { }
}

export type All = RequestsReceive
    | RequestReceive;
