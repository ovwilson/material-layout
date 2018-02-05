import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';

import { SharedModule } from './../../shared/shared.module';
import { UploadComponent, FileImportDirective } from './../../features/upload/upload.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(APPRROUTES)
  ],
  declarations: [
    HomeComponent,
    UploadComponent,
    FileImportDirective
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class HomeModule { }
