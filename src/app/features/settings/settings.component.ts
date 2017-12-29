import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Setting } from './models/setting';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../reducers/reducers';

import * as fromActions from './actions/settings';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html'
})

export class SettingsComponent {

    models$: Observable<Setting[]> = Observable.of<Setting[]>([]);
    model$: Observable<Setting> = Observable.of<Setting>();

    constructor(private store: Store<fromRoot.AppState>) {
        this.models$ = this.store.select(fromRoot.selectSettings);
        // this.model$ = this.store.select(sfromRoot.selectSettings);
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
