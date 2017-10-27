import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SPRequest, Keyword, KeyPair } from './models/request';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromFeature from './reducers/reducers';
import * as fromActions from './actions/actions';

@Component({
    templateUrl: './postman.component.html'
})

export class PostManComponent implements OnInit, AfterViewInit {

    modelForm: FormGroup;
    valueChanges$: Observable<any> = Observable.of<any>();
    methods$: Observable<Keyword[]> = Observable.of<Keyword[]>([]);

    constructor(private store: Store<fromFeature.State>,
        private fb: FormBuilder,
        private router: Router) {
        this.methods$ = this.store.select(fromFeature.selectMethods);
    }

    ngOnInit() {
        this.createForm();
    }

    ngAfterViewInit() {
        this.setValueChanges();
    }

    createForm() {
        this.modelForm = this.fb.group({
            method: ['', Validators.required],
            url: ['', Validators.required],
            category: '',
            results: ''
        });
    }

    setValues(request: SPRequest) {
        this.modelForm.setValue({
            method: request.method,
            url: request.url,
            category: request.category,
            results: ''
        });
    }

    setValueChanges() {
     this.valueChanges$ = this.modelForm.valueChanges;
     //(request =>
       //     this.store.dispatch(new fromActions.RequestReceive(request)));
    }

    onSubmit() {
       // this.router.navigate(['/postman', { outlets: { 'collections': 'collection' } }]);
        this.store.dispatch(new fromActions.RequestReceive(this.modelForm.value));
    }

}
