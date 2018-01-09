import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../reducers/reducers';

@Component({
  templateUrl: './home.component.html',
  animations: [
    trigger('wireframeAnimation', [
      state('start', style({ transform: 'translateX(0) scale(1)' })),
      state('end', style({ transform: 'translateX(100%) scale(0)' })),
      //transition('start <=> end', animate('100ms ease-out')),
      // transition('end => start', animate('100ms ease-in')),
      transition('void => start', [style({ transform: 'translateX(-100%)' }), animate(800)]),
      transition('start => end', animate('700ms ease-out', style({ transform: 'translateX(100%) scale(1)' }))),
      transition('void => end', [style({ transform: 'translateX(100%) scale(1)' }), animate(800)]),
      transition('end => start', animate('700ms ease-in', style({ transform: 'translateX(0) scale(1)' })))
    ]),
    trigger('loadAnimation', [
      state('start', style({ display: 'none' })),
      state('end', style({ display: 'block' })),
      transition('start => end', [animate(1000, keyframes([
        style({ opacity: 0.1 }),
        style({ opacity: 0.3 }),
        style({ opacity: 0.5 }),
        style({ opacity: 0.7 }),
        style({ opacity: 0.9 }),
        style({ opacity: 1 })])
      )]),
      transition('end => start', [animate(1000, keyframes([
        style({ opacity: 1 }),
        style({ opacity: 0.9 }),
        style({ opacity: 0.7 }),
        style({ opacity: 0.5 }),
        style({ opacity: 0.3 }),
        style({ opacity: 0.1 })])
      )])
    ])
  ]
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
