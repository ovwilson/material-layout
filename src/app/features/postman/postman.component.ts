import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SPRequest, Keyword, KeyPair } from './../models/sprequest';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromFeature from './../reducers/features.reducers';

@Component({
    selector: 'postman',
    templateUrl: './postman.component.html'
})

export class PostManComponent implements OnInit {

    modelForm: FormGroup;

    methods$: Observable<Keyword[]> = Observable.of<Keyword[]>([]);

    constructor(private store: Store<fromFeature.State>, private fb: FormBuilder) {
        this.methods$ = this.store.select(fromFeature.selectMethods);
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.modelForm = this.fb.group({
            method: ''
        });
    }

}
