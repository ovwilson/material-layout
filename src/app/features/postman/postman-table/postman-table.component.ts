import { Component, Output, EventEmitter } from '@angular/core';
import { Router, Route } from '@angular/router';
import { SPRequest, Keyword, KeyPair } from './../../models/sprequest';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromFeature from './../../reducers/features.reducers';
import * as fromActions from './../postman.actions';

@Component({
  selector: 'postman-table',
  templateUrl: './postman-table.component.html'
})

export class PostManTableComponent {

  requests$: Observable<SPRequest[]> = Observable.of<SPRequest[]>([]);

  constructor(private router: Router, private store: Store<fromFeature.State>) { 
    this.requests$ = this.store.select(fromFeature.selectRequests);
  }
}
