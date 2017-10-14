import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './reducers/reducers';
import * as fromSideNavActions from './actions/sidenavs';
import * as fromLoaderActions from './actions/loaders';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('wireframeAnimation', [
      state('start', style({ transform: 'translateX(0) scale(1)' })),
      state('end', style({ transform: 'translateX(100%) scale(0)' })),
      // transition('start <=> end', animate('100ms ease-out')),
      // transition('end => start', animate('100ms ease-in')),
      transition('void => start', [style({ transform: 'translateX(-100%)' }), animate(100)]),
      transition('start => end', animate(100, style({ transform: 'translateX(100%) scale(1)' }))),
      transition('void => end', [style({ transform: 'translateX(100%) scale(1)' }), animate(100)]),
      transition('end => start', animate(100, style({ transform: 'translateX(0) scale(1)' })))
    ])
  ]
})
export class AppComponent implements OnInit {
  sideNavs$: Observable<any> = Observable.of<any>();

  constructor(private store: Store<fromRoot.State>) {
    this.sideNavs$ = this.store.select(state => state.sidenavs);
  }

  ngOnInit() {
    this.store.dispatch(new fromLoaderActions.LoadingShow());
    setTimeout(() => { this.store.dispatch(new fromLoaderActions.LoadingHide()); }, 3000);
  }

  onToggleSideNav(direction: string) {
    direction === 'start' ?
      this.store.dispatch(new fromSideNavActions.SideNavStartToggle()) :
      this.store.dispatch(new fromSideNavActions.SideNavEndToggle());

  }

  onClose() {
    console.log('sidenav closed ..');
    this.store.dispatch(new fromSideNavActions.SideNavReset());
  }
}
