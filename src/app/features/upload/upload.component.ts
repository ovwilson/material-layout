import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as Papa from 'papaparse';

const config = {
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

@Component({
    selector: 'upload',
    templateUrl: './upload.component.html'
})

export class UploadComponent {

    dataUpload: Array<any> = [];

    upload() {
        const input: any = document.querySelector('input[type=file]');
        if ('files' in input) {
            for (let i = 0; i < input.files.length; i++) {
                const file = input.files[i];
                console.log(file);
                config['complete'] = (results: any, f: File) => {
                    this.dataUpload = results.data[0];
                    console.log(this.dataUpload);
                };
                Papa.parse(file, config);
            }
        }
        console.log(input);
    }


}
