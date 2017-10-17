import { ActionReducer, Action } from '@ngrx/store';
import * as fromActions from './../actions/settings';
import { Setting } from './../models/setting';

export interface State {
    models: Setting[];
    model: Setting;
    modelChanges: Setting;
}

const initialState: State = {
    models: [
        { id: 1, titleKey: 'Yo', key: 'test', category: 'test' },
        { id: 2, titleKey: 'Test Yo', key: 'test', category: 'test' },
        { id: 3, titleKey: 'Yo Test', key: 'test', category: 'test' }
    ],
    model: {},
    modelChanges: {}
};

export function settings(state = initialState, action: fromActions.All) {
    switch (action.type) {
        case fromActions.SETTINGS_RECEIVE:
            return {
                models: action.payload,
                model: state.model,
                modelChanges: state.modelChanges
            };
        case fromActions.SETTINGS_RESET:
            return initialState;
        default:
            return state;
    }
}

