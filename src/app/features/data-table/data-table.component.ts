import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'data-table',
    templateUrl: './data-table.component.html',
    styles: [`
        .mat-column-select { overflow: visible; }
        .mat-table { overflow: auto; max-height:500px }e`]
})

export class DataTableComponent {

    @Input('models') set models(data: any[]) {
        this.dataSource.data = data;
    }
    @Input('columns') set columns(data: any[]) {
        // tslint:disable-next-line:no-unused-expression
        data.length ? data.unshift('select') : '';
        this.displayedColumns = data;
    }
    @Input() modelGroup: any[];

    @Output() onEdit = new EventEmitter<any>();

    displayedColumns: any[] = [];
    dataSource: MatTableDataSource<any> = new MatTableDataSource();
    selection = new SelectionModel<any>(true, []);

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    showSingleActions() {
        return this.selection.selected.length > 0 && this.selection.selected.length < 2;
    }

    showMultipleActions() {
        return this.selection.selected.length >= 2;
    }



}
