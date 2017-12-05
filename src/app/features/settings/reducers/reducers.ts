import { StoreModule, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSettings from './settings';

export interface State {
    settings: fromSettings.State;
}

export const settingsReducers: ActionReducerMap<State> = {
    settings: fromSettings.settings
};

export const selectFeature = createFeatureSelector<State>('settings');

export const selectSettingTitleKey = (state: State) => state.settings.model.titleKey || 'Pending Titlekey';


