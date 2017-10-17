import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './../components/settings/settings.component';
import { SettingAddComponent } from './../components/settings/setting-add/setting-add.component';
import { SettingUpdateComponent } from './../components/settings/setting-update/setting-update.component';
import { SettingViewComponent } from './../components/settings/setting-view/setting-view.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        SettingsComponent,
        SettingAddComponent,
        SettingUpdateComponent,
        SettingViewComponent
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        SettingsComponent,
        SettingAddComponent,
        SettingUpdateComponent,
        SettingViewComponent
    ]
})
export class SharedFormsModule { }
