import { ActionReducer, Action, createFeatureSelector, createSelector } from '@ngrx/store';
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


export const selectSettingsFeature = createFeatureSelector<State>('settings');
export const selectSettings = createSelector(selectSettingsFeature, (state: State) => state.models);
// Selectors
export const selectSettingTitleKey = createSelector(selectSettingsFeature, (state: State) =>
    state.model.titleKey || 'Pending Titlekey');

export const selectMethods = createSelector(selectSettingsFeature, (state: State) =>
    state.models.filter(settings => settings.category === 'methods' && settings.titleKey === 'keywords'));


// Request Selectors for Settings
export const selectRequestBodies = createSelector(selectSettings, (settings: Setting[]) =>
    settings.filter(setting => setting.category === 'requests' && setting.titleKey === 'body'));

export const selectRequestHeaders = createSelector(selectSettings, (settings: Setting[]) =>
    settings.filter(setting => setting.category === 'requests' && setting.titleKey === 'headers'));

export const selectRequestParams = createSelector(selectSettings, (settings: Setting[]) =>
    settings.filter(setting => setting.category === 'requests' && setting.titleKey === 'params'));
