import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Setting } from './models/setting';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromFeature from './reducers/settings';

import * as fromActions from './actions/settings';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html'
})

export class SettingsComponent {

    models$: Observable<Setting[]> = Observable.of<Setting[]>([]);
    model$: Observable<Setting> = Observable.of<Setting>();

    constructor(private store: Store<fromFeature.State>) {
        this.models$ = this.store.select(fromFeature.selectSettings);
    }

    onAdd() {

    }

    onView(model: Setting) {
        this.store.dispatch(new fromActions.SettingReceive(model));
    }

    onEdit(setting: Setting) {

    }

    onRemove(setting: Setting) {

    }


}
