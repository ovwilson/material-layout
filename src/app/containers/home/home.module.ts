import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';

import { SharedFeaturesModule } from './../../shared/shared.features.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APPRROUTES),
    SharedFeaturesModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class HomeModule { }
