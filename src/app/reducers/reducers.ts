import { StoreModule, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSideNavFeatures from './../features/sidenavs/reducers/sidenavs';
import * as fromLoadingFeatures from './../features/loader-indeterminate/reducers/loaders';
import * as fromSettingsFeatures from './../features/settings/reducers/settings';
import * as fromPostmanFeatures from './../features/postman/reducers/requests';

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


