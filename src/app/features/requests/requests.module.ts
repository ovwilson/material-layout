import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { SharedMaterialModule } from './../../shared/shared.material.module';
import { RequestsComponent } from './components/requests/requests.component';
import { RequestAddComponent } from './components/request-add/request-add.component';

import { APPRROUTES } from './requests.routing';

import { requests } from './reducers/requests';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    RouterModule.forChild(APPRROUTES),
    StoreModule.forFeature('requests', requests)
  ],
  declarations: [
    RequestsComponent,
    RequestAddComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class RequestsModule { }
