import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingAddComponent } from './../components/settings/setting-add/setting-add.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        SettingAddComponent
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        SettingAddComponent
    ]
})
export class SharedFormsModule { }
