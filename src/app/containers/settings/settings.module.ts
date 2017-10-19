import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { APPRROUTES } from './settings.routing';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APPRROUTES),
    SharedModule
  ],
  declarations: [
    SettingsComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class SettingsModule { }
