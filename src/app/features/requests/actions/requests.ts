import { Action } from '@ngrx/store';
import { Request } from './../models/request';

export const REQUESTS_RECEIVE = '[Requests] Receive';
export const REQUEST_RECEIVE = '[Request] Receive';

export class RequestsReceive implements Action {
    readonly type = REQUESTS_RECEIVE;
    constructor(public payload: Request[]) { }
}

export class RequestReceive implements Action {
    readonly type = REQUEST_RECEIVE;
    constructor(public payload: Request) { }
}

export type All = RequestsReceive
    | RequestReceive;
