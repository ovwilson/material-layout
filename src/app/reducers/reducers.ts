import { ActionReducerMap } from '@ngrx/store';
import * as fromLoading from './loaders';
import * as fromSideNavs from './sidenavs';

export interface State {
    loading: boolean;
    sidenavs: fromSideNavs.State;
}

export const reducers: ActionReducerMap<State> = {
    loading: fromLoading.loader,
    sidenavs: fromSideNavs.sidenavs
};

