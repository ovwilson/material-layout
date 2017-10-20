import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Request, KeyPair } from './../models/rest';

import { Store, createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../reducers/reducers';

const selectFeature = createFeatureSelector<any>('postman');
const models = createSelector(selectFeature, (state: any) => state.models);

@Component({
    selector: 'postman',
    templateUrl: './postman.component.html'
})

export class PostManComponent {

    rest$: Observable<any> = Observable.of<any>();

    constructor(private store: Store<fromRoot.State>) {
        this.store.select(models);
    }

}
