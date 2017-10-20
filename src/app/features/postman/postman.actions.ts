import { Action } from '@ngrx/store';
import { SPRequest, KeyPair, Keyword } from './../models/sprequest';

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


export class HeadersReceive implements Action {
    readonly type = HEADERS_RECEIVE;
    constructor(public payload: KeyPair[]) { }
}

export class ParamsReceive implements Action {
    readonly type = PARAMS_RECEIVE;
    constructor(public payload: KeyPair[]) { }
}

export class BodiesReceive implements Action {
    readonly type = BODIES_RECEIVE;
    constructor(public payload: KeyPair[]) { }
}

export class KeywordsReceive implements Action {
    readonly type = KEYWORDS_RECEIVE;
    constructor(public payload: Keyword[]) { }
}


export type All = RequestsReceive
    | RequestReceive
    | HeadersReceive
    | ParamsReceive
    | BodiesReceive
    | KeywordsReceive;
