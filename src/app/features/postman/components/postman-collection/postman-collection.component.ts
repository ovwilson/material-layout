import { Component, Output, EventEmitter } from '@angular/core';
import { Router, Route } from '@angular/router';
import { SPRequest, Keyword, KeyPair } from './../../models/request';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromFeature from './../../reducers/reducers';
import * as fromActions from './../../actions/actions';

@Component({
  templateUrl: './postman-collection.component.html'
})

export class PostManCollectionComponent {

  requests$: Observable<SPRequest[]> = Observable.of<SPRequest[]>([]);

  constructor(private router: Router, private store: Store<fromFeature.State>) {
    this.requests$ = this.store.select(fromFeature.selectRequests);
  }
}
