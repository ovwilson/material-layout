import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromFeature from './../../reducers/sidenavs';
import * as fromSideNavActions from './../../actions/sidenavs';

@Component({
  selector: 'sidenav-start',
  templateUrl: './sidenav-start.component.html'
})
export class SidenavStartComponent {

  constructor(private store: Store<fromFeature.State>) { }

  onToggleSideNav() {
      this.store.dispatch(new fromSideNavActions.SideNavStartToggle());
  }
}


