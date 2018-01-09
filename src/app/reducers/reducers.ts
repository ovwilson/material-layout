import { StoreModule, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSideNavFeatures from './../features/sidenavs/reducers/sidenavs';
import * as fromLoadingFeatures from './../features/loader-indeterminate/reducers/loaders';
import * as fromSettingsFeatures from './../features/settings/reducers/settings';
import * as fromRequestsFeatures from './../features/requests/reducers/requests';

// Models
import { Setting } from './../features/settings/models/setting';

export interface AppState {
    test: boolean;
}

export function reducers() {
    return {
        test: function () { return true; }
    };
}


// Feature Selectors
export const selectLoadingFeature = createFeatureSelector<fromLoadingFeatures.State>('loaders');
export const selectSettingsFeature = createFeatureSelector<fromSettingsFeatures.State>('settings');
export const selectPostmanFeature = createFeatureSelector<fromPostmanFeatures.State>('postman');
export const selectSideNavFeature = createFeatureSelector<fromSideNavFeatures.State>('sidenavs');

export const selectLoading = createSelector(selectLoadingFeature, (state: fromLoadingFeatures.State) => state.indeterminate);
export const selectSettings = createSelector(selectSettingsFeature, (state: fromSettingsFeatures.State) => state.models);
// Selectors
export const selectSettingTitleKey = createSelector(selectSettingsFeature, (state: fromSettingsFeatures.State) =>
    state.model.titleKey || 'Pending Titlekey');

export const selectMethods = createSelector(selectSettingsFeature, (state: fromSettingsFeatures.State) =>
    state.models.filter(settings => settings.category === 'methods' && settings.titleKey === 'keywords'));


// Request Selectors for Settings
export const selectRequestBodies = createSelector(selectRequestSettings, (settings: Setting[]) =>
    settings.filter(setting => setting.category === 'requests' && setting.titleKey === 'body'));

export const selectRequestHeaders = createSelector(selectRequestSettings, (settings: Setting[]) =>
    settings.filter(setting => setting.category === 'requests' && setting.titleKey === 'headers'));

export const selectRequestParams = createSelector(selectRequestSettings, (settings: Setting[]) =>
    settings.filter(setting => setting.category === 'requests' && setting.titleKey === 'params'));



