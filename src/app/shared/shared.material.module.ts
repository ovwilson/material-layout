import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatButtonModule, MatProgressBarModule, MatRadioModule,
    MatListModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatChipsModule, MatTabsModule, MatSelectModule,
    MatExpansionModule, MatStepperModule, MatTableModule, MatSortModule
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
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatTabsModule,
        MatSelectModule,
        MatExpansionModule,
        MatStepperModule,
        MatTableModule,
        MatSortModule
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
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatTabsModule,
        MatSelectModule,
        MatExpansionModule,
        MatStepperModule,
        MatTableModule,
        MatSortModule
    ]
})
export class SharedMaterialModule { }
