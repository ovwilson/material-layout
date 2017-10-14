import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatProgressBarModule } from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule
    ]
})
export class SharedMaterialModule { }
