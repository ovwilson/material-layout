import { StoreModule, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPostMan from './../postman/postman.reducers';
import { SPRequest, KeyPair, Keyword } from './../models/sprequest';

export interface State {
    requests: fromPostMan.State;
    headers: KeyPair[];
    params: KeyPair[];
    bodies: KeyPair[];
    keywords: Keyword[];
}

export const reducers: ActionReducerMap<State> = {
    requests: fromPostMan.requests,
    headers: fromPostMan.headers,
    params: fromPostMan.params,
    bodies: fromPostMan.bodies,
    keywords: fromPostMan.keywords
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
    
    //.filter(keyword => keyword.category === 'methods'));
