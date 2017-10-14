import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatProgressBarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
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
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule
    ]
})
export class SharedMaterialModule { }
