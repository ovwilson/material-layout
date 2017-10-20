import { Action } from '@ngrx/store';
import { Request } from './../models/rest';

export const REQUESTS_RECEIVE = '[Requests] Receive';

export class RequestsReceive implements Action {
    readonly type = REQUESTS_RECEIVE;
    constructor(public payload: Request[]) { }
}

export type All = RequestsReceive;
