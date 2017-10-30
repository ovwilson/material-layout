import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedMaterialModule } from './../../shared/shared.material.module';
import { SettingsComponent } from './settings.component';
import { SettingAddComponent } from './../../components/setting-add/setting-add.component';
import { SettingUpdateComponent } from './../../components/setting-update/setting-update.component';
import { SettingViewComponent } from './../../components/setting-view/setting-view.component';
import { APPRROUTES } from './settings.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    RouterModule.forChild(APPRROUTES)
  ],
  declarations: [
    SettingsComponent,
    SettingAddComponent,
    SettingUpdateComponent,
    SettingViewComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class SettingsModule { }
