import { StoreModule, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequests from './requests.reducers';
import { SPRequest, KeyPair, Keyword } from './../models/request';

export interface State {
    requests: fromRequests.State;
    headers: KeyPair[];
    params: KeyPair[];
    bodies: KeyPair[];
    keywords: Keyword[];
}

export const reducers: ActionReducerMap<State> = {
    requests: fromRequests.requests,
    headers: fromRequests.headers,
    params: fromRequests.params,
    bodies: fromRequests.bodies,
    keywords: fromRequests.keywords
};

export const selectFeature = createFeatureSelector<State>('postman');

export const selectRequests = createSelector(selectFeature,
    (state: State) => state.requests.models);

export const selectRequest = createSelector(selectFeature,
    (state: State) => state.requests.model);

export const selectHeaders = createSelector(selectFeature,
    (state: State) => state.headers);

export const filterHeaders = createSelector(selectHeaders, selectRequest,
    (headers, request) => headers.filter(header => header.category === request.category));

export const selectMethods = createSelector(selectFeature,
    (state: State) => state.keywords);