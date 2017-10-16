import { Component, Input } from '@angular/core';
import { Setting } from './../../models/setting';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html'
})

export class SettingsComponent {

    @Input() settings: Setting[];


}
