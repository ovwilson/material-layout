import { ActionReducer, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './../actions/requests';
import { Request } from './../models/request';

export interface State {
    models: Request[];
    model: Request;
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

// Selectors
export const selectFeature = createFeatureSelector<State>('requests');
export const selectRequests = createSelector(selectFeature, (state: State) => state.models);
export const selectRequest = createSelector(selectFeature, (state: State) => state.model);

