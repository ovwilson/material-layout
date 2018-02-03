import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatSidenavModule, MatToolbarModule, MatIconModule,
    MatButtonModule, MatProgressBarModule, MatRadioModule,
    MatListModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatChipsModule, MatTabsModule, MatSelectModule,
    MatExpansionModule, MatStepperModule, MatDialogModule, MatTableModule
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
        MatDialogModule,
        MatTableModule
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
        MatDialogModule,
        MatTableModule
    ]
})
export class SharedMaterialModule { }
