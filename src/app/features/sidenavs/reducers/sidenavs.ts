import { ActionReducer, Action } from '@ngrx/store';
import * as fromSideNavActions from './../actions/sidenavs';

export interface State {
    start: boolean;
    end: boolean;
}

const initialState: State = { start: false, end: false };

export function sidenavs(state = initialState, action: fromSideNavActions.All) {
    switch (action.type) {
        case fromSideNavActions.SIDENAV_START_TOGGLE:
            return Object.assign({}, { start: !state.start, end: state.end });
        case fromSideNavActions.SIDENAV_END_TOGGLE:
            return Object.assign({}, { start: state.start, end: !state.end });
        case fromSideNavActions.SIDENAV_RESET:
            return Object.assign({}, { start: false, end: false });
        default:
            return state;
    }
}

