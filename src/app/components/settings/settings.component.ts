import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Setting } from './../../models/setting';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../reducers/reducers';

import * as fromActions from './../../actions/settings';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html'
})

export class SettingsComponent {

    constructor(private store: Store<fromRoot.State>) { }

    @Input() settings: Setting[];
    @Output() add = new EventEmitter();

    onAdd() {
        this.add.emit();
    }

    onView(setting: Setting) {
        this.store.dispatch(new fromActions.SettingReceive(setting));
    }

    onEdit(setting: Setting) {

    }

    onRemove(setting: Setting) {

    }


}
