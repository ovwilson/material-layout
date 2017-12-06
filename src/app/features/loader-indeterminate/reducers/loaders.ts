import { ActionReducer, Action } from '@ngrx/store';
import * as fromActions from './../actions/loaders';

const initialState = false;

export function loader(state = initialState, action: fromActions.All) {
    switch (action.type) {
        case fromActions.LOADING_SHOW:
            return true;
        case fromActions.LOADING_HIDE:
            return false;
        default:
            return state;
    }
}

