import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { APPRROUTES } from './main.routing';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APPRROUTES),
    SharedModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class MainModule { }
