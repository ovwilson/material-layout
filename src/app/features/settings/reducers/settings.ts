import { ActionReducer, Action } from '@ngrx/store';
import * as fromActions from './../actions/settings';
import { Setting } from './../models/setting';

export interface State {
    models: Setting[];
    model: Setting;
    modelChanges: Setting;
}

const initialState: State = {
    models: [],
    model: {},
    modelChanges: {}
};

export function settings(state = initialState, action: fromActions.All): State {
    switch (action.type) {
        case fromActions.SETTINGS_RECEIVE:
            return {
                models: action.payload,
                model: state.model,
                modelChanges: state.modelChanges
            };
        case fromActions.SETTING_RECEIVE:
            return {
                models: state.models,
                model: action.payload,
                modelChanges: state.modelChanges
            };
        case fromActions.SETTINGS_RESET:
            return initialState;
        default:
            return state;
    }
}

