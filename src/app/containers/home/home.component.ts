import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../reducers/reducers';
import { getAnimations} from './../../../utils/utils';

@Component({
  templateUrl: './home.component.html',
  animations: getAnimations()
})

export class HomeComponent implements OnInit {

  animationState = 'start';

  loaderIndeterminate$: Observable<boolean> = Observable.of<boolean>();

  constructor(private store: Store<fromRoot.AppState>) {
    this.loaderIndeterminate$ = this.store.select(fromRoot.selectLoading);
  }

  ngOnInit() {
    this.animationState = 'start';
    setTimeout(() => {
      this.animationState = 'end';
    }, 4000);
  }

  animateToggle() {
    this.animationState = (this.animationState === 'start' ? 'end' : 'start');
  }


}
