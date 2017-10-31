import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidenav-end',
  templateUrl: './sidenav-end.component.html'
})
export class SidenavEndComponent {

  @Output() onToggleSideNav = new EventEmitter<string>();

  constructor() { }

  toggleSideNav() {
    this.onToggleSideNav.emit('end');
  }


}
