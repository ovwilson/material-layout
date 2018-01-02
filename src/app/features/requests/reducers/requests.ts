import { ActionReducer, Action } from '@ngrx/store';
import * as fromActions from './../actions/requests';
import { Request } from './../models/request';
import { Setting } from './../../settings/models/setting';

export interface State {
    models: Request[];
    model: Request;
    settings: Setting[];
}

const initialState: State = {
    models: [],
    model: {},
    settings: []
};


export function requests(state = initialState, action: fromActions.All) {
    switch (action.type) {
        case fromActions.REQUESTS_RECEIVE:
            return {
                models: action.payload,
                model: state.model,
                settings: state.settings
            };
        case fromActions.REQUESTS_RECEIVE_SETTINGS:
            return {
                models: state.models,
                model: state.model,
                settings: action.payload
            };
        case fromActions.REQUESTS_SET_SETTINGIDS:
            return {
                models: state.models,
                model: state.model,
                settings: state.settings.map(setting => Object.assign(setting, { id: action.payload }))
            };
        case fromActions.REQUEST_RECEIVE:
            return {
                models: [...state.models, action.payload],
                model: action.payload,
                settings: state.settings
            };
        case fromActions.REQUEST_RECEIVE_SETTING:
            return {
                models: state.models,
                model: state.model,
                settings: [...state.settings, action.payload]
            };
        case fromActions.REQUESTS_RESET:
            return initialState;
        default:
            return state;
    }
}
