import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostManComponent } from './../features/postman/postman.component';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducers } from './../features/reducers/features.reducers';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('postman', reducers)
    ],
    declarations: [
        PostManComponent
    ],
    exports: [
        CommonModule
    ]
})
export class SharedFeaturesModule { }