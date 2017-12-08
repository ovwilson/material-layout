import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidenav-start',
  templateUrl: './sidenav-start.component.html'
})
export class SidenavStartComponent {

  @Output() onToggleSideNav = new EventEmitter<string>();

  constructor() { }

  toggleSideNav() {
    this.onToggleSideNav.emit('start');
  }
}