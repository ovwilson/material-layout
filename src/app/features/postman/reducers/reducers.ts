import { StoreModule, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequests from './requests';

export interface State {
    requests: fromRequests.State;
}

export const reducers: ActionReducerMap<State> = {
    requests: fromRequests.requests
};
