import { Component, Input, Output } from '@angular/core';
import { Setting } from './../../models/setting';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html'
})

export class SettingsComponent {

    @Input() settings: Setting[];

    onAdd(direction: string) {
     
    
      }

    onView(setting: Setting) {

    }

    onEdit(setting: Setting) {

    }

    onRemove(setting: Setting) {

    }


}
