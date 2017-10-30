import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Setting } from './../../models/setting';

@Component({
    selector: 'setting-view',
    templateUrl: './setting-view.component.html'
})
export class SettingViewComponent implements OnInit, OnChanges {

    modelForm: FormGroup;
    @Input() model: Setting;

    constructor(private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.createForm();
    }

    ngOnChanges() {
        if (this.modelForm) { this.setValues(this.model); }
    }

    createForm() {
        this.modelForm = this.fb.group({
            titleKey: '',
            key: '',
            category: ''
        });
    }

    setValues(model: Setting) {
        this.modelForm.setValue({
            titleKey: model.titleKey,
            key: model.key,
            category: model.category
        });
    }


}
