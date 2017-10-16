import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { APPRROUTES } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APPRROUTES)
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
