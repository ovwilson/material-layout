import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../reducers/reducers';
@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  loaderIndeterminate$: Observable<boolean> = Observable.of<boolean>();

  constructor(private store: Store<fromRoot.State>) {
    this.loaderIndeterminate$ = this.store.select(state => state.loading);
}


}
