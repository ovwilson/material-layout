import {
    Component, Directive, HostListener, OnInit, Output, EventEmitter,
    ElementRef, ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Papa from 'papaparse';
import * as faker from 'faker';

@Directive({
    selector: '[fileImport]'
})

export class FileImportDirective {

    @Output() onFileChange = new EventEmitter<File>();

    constructor(private el: ElementRef) { }

    @HostListener('change') onChange() {
        for (let i = 0; i < this.el.nativeElement.files.length; i++) {
            const file = this.el.nativeElement.files[i];
            this.onFileChange.emit(file);
        }
    }


}

@Component({
    selector: 'upload',
    templateUrl: './upload.component.html'
})

export class UploadComponent implements OnInit {

    @ViewChild('fileInput') fileInput: ElementRef;

    files: Array<File> = [];
    columns = this.onPopulateColumns();
    modelGroup = [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName', label: 'Last Name' }
    ];

    models$: Observable<any[]> = Observable.of<any[]>(this.onPopulateData());

    config = {
        delimiter: '',	// auto-detect
        newline: '',	// auto-detect
        quoteChar: '"',
        header: false,
        dynamicTyping: false,
        preview: 0,
        encoding: '',
        worker: false,
        comments: false,
        step: undefined,
        error: undefined,
        download: false,
        skipEmptyLines: false,
        chunk: undefined,
        fastMode: undefined,
        beforeFirstChunk: undefined,
        withCredentials: undefined
    };

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.setConfig();
    }

    setConfig() {
        this.config['complete'] = (results: any, f: File) => {
            const records = [];
            const columns = [];

            results.data.map(result => records.push(
                Object.assign({}, {
                    firstName: result[0],
                    lastName: result[1]
                })
            ));
            Object.keys(records[0])
                .map(key => columns.push(key));
            this.columns = columns;
            records.shift();
            this.models$ = Observable.of(records);
        };
    }

    onPopulateColumns() {
        return ['firstName', 'lastName'];
    }

    onPopulateData() {
        const records = [];
        const quantity = 10;
        for (let i = 0; i < quantity; i++) {
            records.push(Object.assign({}, {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName()
            }));
        }
        return records;
    }

    onImport() {
        this.fileInput.nativeElement.click();
    }

    onFileChange(file: any) {
        this.files = [];
        this.files.push(file);
        console.log('File', file);
        Papa.parse(file, this.config);
    }

    onEdit(selection: any) {
        console.log(selection);
    }

}
