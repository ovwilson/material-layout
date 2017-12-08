import { ActionReducer, Action } from '@ngrx/store';
import * as fromActions from './../actions/loaders';

export interface State {
    indeterminate: boolean;
}

const initialState = {
    indeterminate: false
};

export function loaders(state = initialState, action: fromActions.All) {
    switch (action.type) {
        case fromActions.LOADING_SHOW:
            return {
                indeterminate: true
            };
        case fromActions.LOADING_HIDE:
            return {
                indeterminate: false
            };
        default:
            return state;
    }
}

