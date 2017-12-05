import { StoreModule, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayoutFeatures from './../features/layouts/reducers/reducers';
import * as fromSettingsFeatures from './../features/settings/reducers/reducers';
import * as fromPostmanFeatures from './../features/postman/reducers/reducers';

export const selectLayoutsFeature = createFeatureSelector<fromLayoutFeatures.State>('layouts');
export const selectSettingsFeature = createFeatureSelector<fromSettingsFeatures.State>('settings');
export const selectPostmanFeature = createFeatureSelector<fromPostmanFeatures.State>('postman');

export const selectLoading = createSelector(selectLayoutsFeature, (state: fromLayoutFeatures.State) => state.loading);
export const selectSettings = createSelector(selectSettingsFeature, (state: fromSettingsFeatures.State) => state.settings.models);
export const selectRequests = createSelector(selectPostmanFeature, (state: fromPostmanFeatures.State) => state.requests.models);

//export const selectRequests = createSelector(selectFeature,
//    (state: State) => state.requests.models);

//export const selectRequest = createSelector(selectFeature,
 //   (state: State) => state.requests.model);

    /*
export const selectHeaders = createSelector(selectFeature,
    (state: State) => state.headers);

export const filterHeaders = createSelector(selectHeaders, selectRequest,
    (headers, request) => headers.filter(header => header.category === request.category));

export const selectMethods = createSelector(selectFeature,
    (state: State) => state.keywords);
    */


