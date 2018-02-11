import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { APPRROUTES } from './tables.routing';
import { SharedMaterialModule } from './../../shared/shared.material.module';


@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(APPRROUTES)
  ],
  declarations: [
    TablesComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class TablesModule { }
