import { ActionReducer, Action } from '@ngrx/store';
import * as fromActions from './../actions/actions';
import { SPRequest } from './../models/request';

export interface State {
    models: SPRequest[];
    model: SPRequest;
}

const initialState: State = {
    models: [],
    model: {}
};


export function requests(state = initialState, action: fromActions.All) {
    switch (action.type) {
        case fromActions.REQUESTS_RECEIVE:
            return {
                models: action.payload,
                model: state.model
            };
        case fromActions.REQUEST_RECEIVE:
            return {
                models: [...state.models, action.payload],
                model: action.payload
            };
        default:
            return state;
    }
}
