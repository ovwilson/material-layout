import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatButtonModule, MatProgressBarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule
    ]
})
export class SharedMaterialModule { }
