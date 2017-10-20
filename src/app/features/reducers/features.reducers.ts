import { StoreModule, ActionReducerMap } from '@ngrx/store';
import * as fromPostMan from './../postman/postman.reducers';

export const reducers: ActionReducerMap<any> = {
    postmans: fromPostMan.postmans,
};
