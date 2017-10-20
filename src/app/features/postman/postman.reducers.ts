import { ActionReducer, Action } from '@ngrx/store';
import * as fromActions from './postman.actions';
import { SPRequest, KeyPair, Keyword } from './../models/sprequest';

export interface State {
    models: SPRequest[];
    model: SPRequest;
}

const initialState: State = {
    models: [],
    model: {}
};

const defaultKeywords: Keyword[] = [
    { category: 'methods', key: 'method', value: 'GET' },
    { category: 'methods', key: 'method', value: 'POST' },
    { category: 'methods', key: 'method', value: 'PATCH' },
    { category: 'methods', key: 'method', value: 'DELETE' }
];

export function headers(state: KeyPair[], action: fromActions.All) {
    switch (action.type) {
        case fromActions.HEADERS_RECEIVE:
            return action.payload;
        default:
            return state;
    }
}

export function keywords(state = defaultKeywords, action: fromActions.All) {
    switch (action.type) {
        case fromActions.KEYWORDS_RECEIVE:
            return action.payload;
        default:
            return state;
    }
}

export function params(state: KeyPair[], action: fromActions.All) {
    switch (action.type) {
        case fromActions.PARAMS_RECEIVE:
            return action.payload;
        default:
            return state;
    }
}


export function bodies(state: Keyword[], action: fromActions.All) {
    switch (action.type) {
        case fromActions.BODIES_RECEIVE:
            return action.payload;
        default:
            return state;
    }
}


export function requests(state = initialState, action: fromActions.All) {
    switch (action.type) {
        case fromActions.REQUESTS_RECEIVE:
            return {
                models: action.payload,
                model: state.model
            };
        case fromActions.REQUEST_RECEIVE:
            return {
                models: [...state.models, action.payload],
                model: action.payload
            };
        default:
            return state;
    }
}

