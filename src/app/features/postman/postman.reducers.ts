import { ActionReducer, Action } from '@ngrx/store';
import * as fromActions from './postman.actions';
import { Request } from './../models/rest';

export interface State {
    models: Request[];
    model: Request;
}

const initialState: State = {
    models: [{ method: 'GET' }],
    model: {}
};

export function postmans(state = initialState, action: fromActions.All) {
    switch (action.type) {
        case fromActions.REQUESTS_RECEIVE:
            return {
                models: action.payload,
                model: state.model
            };
        default:
            return state;
    }
}

