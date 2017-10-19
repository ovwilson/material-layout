import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingAddComponent } from './../components/setting-add/setting-add.component';
import { SettingUpdateComponent } from './../components/setting-update/setting-update.component';
import { SettingViewComponent } from './../components/setting-view/setting-view.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        SettingAddComponent,
        SettingUpdateComponent,
        SettingViewComponent
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        SettingAddComponent,
        SettingUpdateComponent,
        SettingViewComponent
    ]
})
export class SharedFormsModule { }
