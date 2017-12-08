import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { SharedMaterialModule } from './../../shared/shared.material.module';
import { APPRROUTES } from './postman.routing';
import { requests } from './reducers/requests';
import { PostManComponent } from './postman.component';
import { PostManCollectionComponent } from './components/postman-collection/postman-collection.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(APPRROUTES),
        ReactiveFormsModule,
        SharedMaterialModule,
        StoreModule.forFeature('postman', requests)
    ],
    declarations: [
        PostManComponent,
        PostManCollectionComponent
    ],
    exports: [
        RouterModule
    ]
})
export class PostManModule { }