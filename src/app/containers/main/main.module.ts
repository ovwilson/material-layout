import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { APPRROUTES } from './main.routing';
import { SharedMaterialModule } from './../../shared/shared.material.module';
import { SharedFormsModule } from './../../shared/shared.forms.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APPRROUTES),
    SharedMaterialModule,
    SharedFormsModule
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
