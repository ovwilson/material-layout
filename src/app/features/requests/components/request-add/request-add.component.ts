import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from './../../models/request';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../../../reducers/reducers';
import * as fromActions from './../../actions/requests';

@Component({
    selector: 'request-add',
    templateUrl: './request-add.component.html'
})

export class RequestAddComponent {

    isLinear: boolean;


}
