import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../../reducers/reducers';

@Component({
    selector: 'loader-indeterminate',
    templateUrl: './loader-indeterminate.html'
})
export class LoaderIndeterminateComponent {

    loaderIndeterminate$: Observable<boolean> = Observable.of<boolean>();

    constructor(private store: Store<fromRoot.State>) {
        this.loaderIndeterminate$ = this.store.select(state => state.loading);
    }

}
