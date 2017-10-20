import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostManComponent } from './../features/postman/postman.component';
import { PostManTableComponent } from './../features/postman/postman-table/postman-table.component';
import { SharedMaterialModule } from './shared.material.module';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducers } from './../features/reducers/features.reducers';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedMaterialModule,
        StoreModule.forFeature('postman', reducers)
    ],
    declarations: [
        PostManComponent,
        PostManTableComponent
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        SharedMaterialModule,
        PostManComponent,
        PostManTableComponent
    ]
})
export class SharedFeaturesModule { }
