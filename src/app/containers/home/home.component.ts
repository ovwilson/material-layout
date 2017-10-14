import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  animationState = 'start';

  constructor() { }

  animateToggle() {
    this.animationState = (this.animationState === 'start' ? 'end' : 'start');
  }


}
