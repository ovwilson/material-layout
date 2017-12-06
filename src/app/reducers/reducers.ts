import { StoreModule, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayoutFeatures from './../features/layouts/reducers/reducers';
import * as fromSettingsFeatures from './../features/settings/reducers/settings';
import * as fromPostmanFeatures from './../features/postman/reducers/requests';

// Feature Selectors
export const selectLayoutsFeature = createFeatureSelector<fromLayoutFeatures.State>('layouts');
export const selectSettingsFeature = createFeatureSelector<fromSettingsFeatures.State>('settings');
export const selectPostmanFeature = createFeatureSelector<fromPostmanFeatures.State>('postman');

export const selectLoading = createSelector(selectLayoutsFeature, (state: fromLayoutFeatures.State) => state.loading);
export const selectSettings = createSelector(selectSettingsFeature, (state: fromSettingsFeatures.State) => state.models);
export const selectRequests = createSelector(selectPostmanFeature, (state: fromPostmanFeatures.State) => state.models);

// Selectors
export const selectSettingTitleKey = createSelector(selectSettingsFeature, (state: fromSettingsFeatures.State) =>
    state.model.titleKey || 'Pending Titlekey');


