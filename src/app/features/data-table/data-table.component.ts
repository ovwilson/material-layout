import {Component, Input, Output, EventEmitter} from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'data-table',
    templateUrl: './data-table.component.html'
})

export class DataTableComponent {

    @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource();
    @Input() modelGroup: any[];
    @Input() displayedColumns: any[] = [];

}
