import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'dialog-comp',
    templateUrl: 'dialog.component.html'
})

export class DialogComponent {

    orderTypes = [
        'Phones', 'Pagers', 'CDs', 'DVDs'
    ];
    

    constructor(public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

}
