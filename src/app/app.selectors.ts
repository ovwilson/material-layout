import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from './reducers/reducers';
import { Setting } from './models/setting';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/combineLatest';

export const selectSettingTitleKey = (state: fromRoot.State) => state.settings.model.titleKey || 'Pending Titlekey';
