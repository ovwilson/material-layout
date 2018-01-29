import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';
import { SharedMaterialModule } from './../../shared/shared.material.module';

import { UploadComponent } from './../../features/upload/upload.component';


@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(APPRROUTES)
  ],
  declarations: [
    HomeComponent,
    UploadComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class HomeModule { }
