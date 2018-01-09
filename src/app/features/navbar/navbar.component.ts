import { Component, Output, EventEmitter } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Output() onToggleSideNav = new EventEmitter<string>();

  constructor(private router: Router) { }

  toggleSideNav(direction: string) {
    this.onToggleSideNav.emit(direction);
  }

  onHome() {
    this.router.navigate(['/home']);
  }

  onRequests() {
    this.router.navigate(['/request-add', { outlets: { 'requests': 'requests' } }]);
  }

  onSettings() {
    this.router.navigate(['/settings']);
  }

  onPostMan() {
    this.router.navigate(['/postman', { outlets: { 'collections': 'collection' } }]);
  }


}
