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
  styleUrls: ['./app.component.css']
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
