import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatButtonModule, MatProgressBarModule, MatRadioModule,
    MatListModule, MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule,
        MatRadioModule,
        MatListModule,
        MatCardModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule,
        MatRadioModule,
        MatListModule,
        MatCardModule
    ]
})
export class SharedMaterialModule { }
