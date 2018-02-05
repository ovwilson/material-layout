import { Component, Output, EventEmitter } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromSideNavActions from './../sidenavs/actions/sidenavs';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Output() onToggleSideNav = new EventEmitter<string>();

  constructor(private router: Router, private store: Store<any>) { }

  toggleSideNavStart() {
    this.store.dispatch(new fromSideNavActions.SideNavStartToggle());
  }

  toggleSideNavEnd() {
    this.store.dispatch(new fromSideNavActions.SideNavEndToggle());
  }

  onRequests() {
    this.router.navigate(['/request-add', { outlets: { 'requests': 'requests' } }]);
  }

  onPostMan() {
    this.router.navigate(['/postman', { outlets: { 'collections': 'collection' } }]);
  }


}
