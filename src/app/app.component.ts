import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './reducers/reducers';
import * as fromSideNavActions from './actions/sidenavs';
import * as fromLoaderActions from './actions/loaders';

import * as fromSettingsActions from './actions/settings';

import { Setting } from './models/setting';
import * as fromSelectors from './app.selectors';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sideNavs$: Observable<any> = Observable.of<any>();
  key$: Observable<string> = Observable.of<string>();

  constructor(private store: Store<fromRoot.State>) {
    this.sideNavs$ = this.store.select(state => state.sidenavs);
    this.key$ = this.store.select(fromSelectors.selectSettingTitleKey)
      .do(key => this.setKey(key));
  }

  ngOnInit() {
    const setting: Setting = { titleKey: 'test', key: 'i', category: 'Test' };

    //  this.store.dispatch(new fromLoaderActions.LoadingShow());
    setTimeout(() => {
      this.store.dispatch(new fromSettingsActions.SettingReceive(setting));
      this.store.dispatch(new fromLoaderActions.LoadingHide());
    }, 3000);
  }

  onToggleSideNav(direction: string) {
    direction === 'start' ?
      this.store.dispatch(new fromSideNavActions.SideNavStartToggle()) :
      this.store.dispatch(new fromSideNavActions.SideNavEndToggle());

  }

  setKey(key: string) {
    console.log(key);
  }

  onClose() {
    console.log('sidenav closed ..');
    this.store.dispatch(new fromSideNavActions.SideNavReset());
  }
}
