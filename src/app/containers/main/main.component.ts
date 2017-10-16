import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../reducers/reducers';
import { Setting } from './../../models/setting';

@Component({
    templateUrl: './main.component.html'
})

export class MainComponent {

    loaderIndeterminate$: Observable<boolean> = Observable.of<boolean>();
    settings$: Observable<Setting[]> = Observable.of<Setting[]>([]);
    setting$: Observable<Setting> = Observable.of<Setting>();

    constructor(private store: Store<fromRoot.State>) {
        this.loaderIndeterminate$ = this.store.select(state => state.loading);
        this.settings$ = this.store.select(state => state.settings.models);
        this.setting$ = this.store.select(state => state.settings.model);
    }


}
