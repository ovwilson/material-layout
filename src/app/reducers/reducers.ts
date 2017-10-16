import { ActionReducerMap } from '@ngrx/store';
import * as fromLoading from './loaders';
import * as fromSideNavs from './sidenavs';
import * as fromSettings from './settings';

export interface State {
    loading: boolean;
    sidenavs: fromSideNavs.State;
    settings: fromSettings.State;
}

export const reducers: ActionReducerMap<State> = {
    loading: fromLoading.loader,
    sidenavs: fromSideNavs.sidenavs,
    settings: fromSettings.settings
};

