import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromRoot from './../../../reducers/reducers';
import * as fromFeature from './requests';
import * as fromActions from './../actions/requests';

import * as fromUtils from './../../../../utils/utils';

const models = fromUtils.getValues('Setting', 10);
const model = fromUtils.getValue('Setting');

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concat';

describe('Requests Reducers', () => {

    let store: Store<fromRoot.AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(fromRoot.reducers),
                StoreModule.forFeature('requests', fromFeature.requests)
            ]
        });
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    });

    it('should receive settings bodies', () => {
        const setting = Object.assign(model, { category: 'requests', titleKey: 'body' });
        const action = new fromActions.RequestReceiveSetting(model);

        const settings$ = store.select(fromRoot.selectRequestBodies);
        store.dispatch(action);
        expect(store.dispatch).toHaveBeenCalledWith(action);
        settings$.do(data => console.log('Requests Reducers: should receive request bodies', data))
            .subscribe(data => {
                const result = data.filter(value => value.titleKey === 'body');
                expect(data.length).toBeGreaterThan(0);
                expect(result[0].category).toEqual('requests');
                expect(result[0].titleKey).toEqual('body');
            });
    });

    it('should receive settings headers', () => {
        const setting = Object.assign(model, { category: 'requests', titleKey: 'headers' });
        const action = new fromActions.RequestReceiveSetting(model);

        const settings$ = store.select(fromRoot.selectRequestHeaders);
        store.dispatch(action);
        expect(store.dispatch).toHaveBeenCalledWith(action);
        settings$.do(data => console.log('Requests Reducers: should receive request headers', data))
            .subscribe(data => {
                const result = data.filter(value => value.titleKey === 'headers');
                expect(data.length).toBeGreaterThan(0);
                expect(result[0].category).toEqual('requests');
                expect(result[0].titleKey).toEqual('headers');
            });
    });

    it('should receive settings params', () => {
        const setting = Object.assign(model, { category: 'requests', titleKey: 'params' });
        const action = new fromActions.RequestReceiveSetting(model);

        const settings$ = store.select(fromRoot.selectRequestParams);
        store.dispatch(action);
        expect(store.dispatch).toHaveBeenCalledWith(action);
        settings$.do(data => console.log('Requests Reducers: should receive request params', data))
            .subscribe(data => {
                const result = data.filter(value => value.titleKey === 'params');
                expect(data.length).toBeGreaterThan(0);
                expect(data[0].category).toEqual('requests');
                expect(data[0].titleKey).toEqual('params');
            });
    });

    it('should set setting ids', async(() => {
        const settingIds = models.map(setting => {
            delete setting.id;
            return setting;
        });
        const resetAction = new fromActions.RequestsReset({});
        store.dispatch(resetAction);
        expect(store.dispatch).toHaveBeenCalledWith(resetAction);
        const action = new fromActions.RequestsReceiveSettings(settingIds);
        store.dispatch(action);
        expect(store.dispatch).toHaveBeenCalledWith(action);
        const checkIdAction = new fromActions.RequestsSetSettingsIds(model.id);

        const settings$ = store.select(fromRoot.selectRequestSettings).take(1)
            .do(data => console.log('Requests Reducers: should set setting ids - Settings', data))
            .do(data => expect(data.length).toBeGreaterThan(0))
            .do(data => store.dispatch(new fromActions.RequestsSetSettingsIds(model.id)));

        const checkIds$ = store.select(fromRoot.selectRequestSettings).take(1)
            .do(data => console.log('Requests Reducers: should set setting ids - checkIds', data))
            .do(settings => settings.forEach(setting => expect(setting.id).toEqual(model.id) ));

        settings$.concat(checkIds$).subscribe();

    }));

});
