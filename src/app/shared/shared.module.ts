import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { LoaderIndeterminateComponent } from './../features/layouts/components/loader-indeterminate/loader-indeterminate.component';
import { SidenavStartComponent } from './../features/layouts/components/sidenav-start/sidenav-start.component';
import { SidenavEndComponent } from './../features/layouts/components/sidenav-end/sidenav-end.component';
import { SharedMaterialModule } from './shared.material.module';

import { layoutReducers } from './../features/layouts/reducers/reducers';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedMaterialModule,
        StoreModule.forFeature('layouts', layoutReducers)
    ],
    declarations: [
        NavbarComponent,
        SidenavStartComponent,
        SidenavEndComponent,
        LoaderIndeterminateComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        SharedMaterialModule,
        NavbarComponent,
        SidenavStartComponent,
        SidenavEndComponent,
        LoaderIndeterminateComponent
    ]
})
export class SharedModule { }
