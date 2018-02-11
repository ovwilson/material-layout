import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromFeature from './../../reducers/sidenavs';
import * as fromSideNavActions from './../../actions/sidenavs';

@Component({
  selector: 'sidenav-end',
  templateUrl: './sidenav-end.component.html'
})
export class SidenavEndComponent {

  constructor(private store: Store<fromFeature.State>) { }

  onToggleSideNav() {
      this.store.dispatch(new fromSideNavActions.SideNavEndToggle());
  }
}


