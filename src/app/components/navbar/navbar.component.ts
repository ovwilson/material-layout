import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Output() onToggleSideNav = new EventEmitter<string>();

  constructor() { }

  toggleSideNav(direction: string) {
    this.onToggleSideNav.emit(direction);
  }

}
