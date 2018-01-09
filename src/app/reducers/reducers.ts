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
export const selectSideNavFeature = createFeatureSelector<fromSideNavFeatures.State>('sidenavs');

export const selectLoading = createSelector(selectLoadingFeature, (state: fromLoadingFeatures.State) => state.indeterminate);