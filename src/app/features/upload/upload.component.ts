import {
    Component, Directive, HostListener, OnInit, Output, EventEmitter,
    ElementRef, ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Papa from 'papaparse';

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

    constructor(private el: ElementRef) { }

    files: Array<File> = [];

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

    ngOnInit() {

        this.config['complete'] = (results: any, f: File) => {
            this.files = results.data[0];
            console.log(this.files);
        };

    }

    onImport() {
        this.fileInput.nativeElement.click();
    }

    onFileChange(file: any) {
        Papa.parse(file, this.config);
    }

}
