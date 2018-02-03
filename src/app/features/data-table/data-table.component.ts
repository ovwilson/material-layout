import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'data-table',
    templateUrl: './data-table.component.html'
})

export class DataTableComponent {

    @Input('models') set models(data: any[]) {
        this.dataSource.data = data;
    }
    @Input() modelGroup: any[];
    @Input() displayedColumns: any[] = [];

    dataSource: MatTableDataSource<any> = new MatTableDataSource();


}
