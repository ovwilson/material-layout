import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSidenavModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        MatSidenavModule
    ]
})
export class SharedMaterialModule { }
