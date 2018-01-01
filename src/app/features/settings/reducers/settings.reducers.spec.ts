import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromRoot from './../../../reducers/reducers';
import * as fromFeature from './settings';
import * as fromActions from './../actions/settings';

import * as fromUtils from './../../../../utils/utils';

const models = fromUtils.getValues('Setting', 10);
const model = fromUtils.getValue('Setting');

import 'rxjs/add/operator/do';

describe('Settings Reducers', () => {

  let store: Store<fromRoot.AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(fromRoot.reducers),
        StoreModule.forFeature('settings', fromFeature.settings)
      ]
    });
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should receive settings', () => {
    const action = new fromActions.SettingsReceive(models);
    const settings$ = store.select(fromRoot.selectSettings);
    store.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    settings$.do(data => console.log('Settings Reducers: should receive settings', data))
      .subscribe(data => {
        expect(data.length).toBeGreaterThan(0);
      });
  });

});
