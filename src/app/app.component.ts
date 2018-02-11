import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './reducers/reducers';

import * as fromSideNavFeature from './features/sidenavs/reducers/sidenavs';
import * as fromSideNavActions from './features/sidenavs/actions/sidenavs';
import * as fromLoaderActions from './features/loader-indeterminate/actions/loaders';
import * as fromSettingsActions from './features/settings/actions/settings';

import { Setting } from './features/settings/models/setting';

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

  constructor(private store: Store<fromRoot.AppState>) {
     this.sideNavs$ = this.store.select(fromSideNavFeature.selectSideNavFeature);
    //   this.key$ = this.store.select(fromRoot.selectSettingTitleKey)
    //    .do(key => this.setKey(key));
  }

  ngOnInit() {
    //  const setting: Setting = { titleKey: 'test', key: 'i', category: 'Test' };

    this.store.dispatch(new fromLoaderActions.LoadingShow());
    setTimeout(() => {
      //    this.store.dispatch(new fromSettingsActions.SettingReceive(setting));
      this.store.dispatch(new fromLoaderActions.LoadingHide());
    }, 4000);
  }

 

  setKey(key: string) {
    console.log(key);
  }

  onClose() {
    console.log('sidenav closed ..');
  }
}
