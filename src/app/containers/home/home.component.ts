import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromFeatures from './../../features/layouts/reducers/reducers';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  loaderIndeterminate$: Observable<boolean> = Observable.of<boolean>();

  constructor(private store: Store<fromFeatures.State>) {
    this.loaderIndeterminate$ = this.store.select(state => state.loading);
  }


}
